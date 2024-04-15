import type { Page } from './doc';
import { type XPixBaseBlock, XPixBlockModel as BlockModel, XPixBlockModelProps as BlockModelProps } from './base-block';
import { createEmptyPage, createMixedBlock, Job, type MixedBlock } from './doc';
import { XPixBlockSpecs } from './specs';
import { BlockStdScope } from './std';

import { Surface, type ViewState } from './view';
import { loadBlob, loadImage } from './utils/loader';
import { showOpenFilePicker, type OpenFilePickerOptions } from './utils/picker';

// import Konva from 'konva';

// Export base types
// export * from './utils/loader';
// export * from './utils/picker';
export type { ViewState } from './view';
export { BaseSelection } from './std';
export {
  Page,
  Workspace,
  BlockModel,
  XPixBlockModel,

  Schema,
  defineBlockSchema,
} from './doc';

export type EditorConfig = {
  root: HTMLDivElement,
  page?: Page
};

export type ExportConfig = {
  mimeType?: string,
  quality?: number,
  pixelRatio?: number,
  imageSmoothingEnabled?: boolean
};

export class Editor extends EventTarget {
  root: HTMLDivElement;
  std?: BlockStdScope;
  view?: Surface;
  page?: Page;

  viewState: ViewState = {
    currentFrameId: '',
    zoomRatio: 1
  };

  constructor(options: EditorConfig) {
    super();

    this.root = options.root;
  }

  // History
  get canUndo() {
    return !!this.page?.canUndo;
  }
  get canRedo() {
    return !!this.page?.canRedo;
  }
  undo() {
    return this.page?.undo();
  }
  redo() {
    return this.page?.redo();
  }

  // Std
  get command() {
    return this.std?.command;
  }
  get event() {
    return this.std?.event;
  }
  get selection() {
    return this.std?.selection;
  }

  async init(createPage = true) {
    if (createPage) {
      await this.getPage(true);
    }

    const page = this.page;
    if (!page) {
      throw new Error('Editor init error: Page not found');
    }

    // Reset history
    page.resetHistory();

    // Init std
    this.std = new BlockStdScope({
      host: this.root,
      workspace: page.workspace,
      page: page,
    });

    this.std.spec.applySpecs(XPixBlockSpecs);
    this.std.mount();

    // Init view
    this.view = new Surface({
      viewState: this.viewState,
      root: this.root,
      std: this.std,
      page
    });

    return this;
  }

  async createPage() {
    return createEmptyPage().init();
  }

  async getPage(create = false, ensure= true) {
    if (create && !this.page) {
      this.page = await this.createPage();
    }

    if (ensure && !this.page) {
      throw new Error('No page initialized');
    }

    return this.page;
  }

  getRootFrames(page = this.page) {
    const rootNodes = page?.root?.children || [];

    return rootNodes.filter(node => node.flavour === 'xpix:frame') as BlockModel[];
  }

  getCurrentFrame(page = this.page, ensure = true) {
    const frames = this.getRootFrames(page);
    const currentFrameId = this.viewState.currentFrameId;
    const frame = frames.find(frame => frame.id === currentFrameId) || frames[0];

    if (!frame && ensure) {
      throw new Error('Frame block not found');
    }

    return frame;
  }

  switchFrame(frame: BlockModel) {
    this.view?.switchFrame(frame);
  }

  getSelections() {
    const selection = this.std?.selection;
    if (!selection) {
      return [];
    }

    return selection.value;
  }

  getActiveBlock(selections = this.getSelections()) {
    const len = selections.length;
    if (len < 1) {
      return null;
    }

    if (len === 1) {
      return this.getBlockById(selections[0].blockId) as BlockModel;
    }

    return createMixedBlock({
      name: 'xpix:mixed',
      flavour: 'xpix:mixed',
      count: len
    });
  }

  getBlockById(blockId: string) {
    return this.page?.getBlockById(blockId);
  }

  getBlockType(block = this.getActiveBlock(), upperCase = true) {
    if (!block) {
      return '';
    }

    let type = block.flavour.replace('xpix:', '');
    if (upperCase) {
      type = type.charAt(0).toUpperCase() + type.slice(1);
    }

    return type;
  }

  // async addImage(imgSource: CanvasImageSource, props?: BlockModelProps): Promise<string> {
  // async addImage(file: Blob, props?: BlockModelProps): Promise<string>;
  async addImage(url: string | Blob, props?: BlockModelProps) {
    const page = await this.getPage() as Page;
    const frame = this.getCurrentFrame() as BlockModel;
    const { blob, width, height } = await this.loadImage(url);

    if (!props) {
      props = {};
    }

    // Auto fill width and height if not provided
    props.height = props.height || height;
    props.width = props.width || width;

    // Limit max width/height
    const aspect = props.width / props.height;
    if (props.width! > props.height!) {
      props.width = Math.min(props.width, frame.width!);
      props.height = props.width / aspect;
    }
    else {
      props.height = Math.min(props.height, frame.height!);
      props.width = props.height * aspect;
    }

    // Auto fill x, y
    props.x = props.x ?? (frame.width! - props.width) / 2;
    props.y = props.y ?? (frame.height! - props.height) / 2;

    const assetId = await page.blob.set(blob);

    return this.addBlock('image', {
      ...props,

      assetId
    });
  }

  getActiveNode(selections = this.getSelections()) {
    const model = this.getActiveBlock(selections);

    return model ? this.getNode(model) : null;
  }

  getNode(idOrModel: string | BlockModel | MixedBlock) {
    let model = idOrModel as BlockModel;
    if (typeof idOrModel === 'string') {
      model = this.getBlockById(idOrModel) as BlockModel;
    }

    if (!model) {
      model = this.getActiveBlock() as BlockModel;
    }

    if (!model) {
      return null;
    }

    return this.view?.stage.findOne(`#${model.getFullId()}`) as XPixBaseBlock;
  }

  addBlock(
    type: string,
    props: BlockModelProps = {},
    parent = this.getCurrentFrame()
  ) {
    if (!parent) {
      parent = this.page?.root as BlockModel;
    }

    if (!parent) {
      throw new Error('addBlock: parent not found');
    }

    const page = parent.page;
    const flavour = type.indexOf('xpix:') !== 0 ? `xpix:${type}` : type;
    const schema = page.getSchemaByFlavour(flavour);
    if (!schema) {
      throw new Error('addBlock: schema not found for type: ' + type);
    }

    const modelId = page.addBlock(flavour, props, parent.id);
    const model = page.getBlockById(modelId) as BlockModel;
    const node = this.getNode(model);

    if (!node) {
      // Remove model if node not found
      page.deleteBlock(model);

      throw new Error('Node not found for model: ' + modelId);
    }

    // return node as XPixBaseBlock;
    return model;
  }

  select(blocks: BlockModel | BlockModel[]) {
    if (!this.std) {
      return;
    }

    if (!Array.isArray(blocks)) {
      blocks = [ blocks ];
    }

    const docSelection = this.std.selection;
    const sels = blocks.map(block => {
      return docSelection.create('block', {
        path: [block.id]
      });
    });

    docSelection.set(sels);
  }

  async pickFile(accept = 'image/*', multiple = false) {
    const input = document.createElement('input');

    input.type = 'file';
    input.accept = accept;
    input.multiple = multiple;

    // TODO: No reject handler
    return new Promise<File[] | File | null>((resolve) => {
      input.onchange = () => {
        const ret = multiple
          ? Array.from(input.files || [])
          : input.files?.[0] || null;

        resolve(ret);
      };

      input.click();
    });
  }

  // TODO: implement updatePage
  // updatePage(page: Page) {
  //   if (this.page) {
  //     const { slots } = this.page;

  //     slots.blockUpdated.dispose();
  //     slots.ready.dispose();
  //   }

  //   if (this.std) {
  //     this.std.unmount();
  //   }

  //   if (!this.view) {
  //     this.view = new Surface(this.root, this.std, page);
  //   }
  //   else {
  //     this.view.updatePage(page);
  //   }

  //   this.page = page;
  // }

  // async resetPage(page?: Page) {
  //   if (!page) {
  //     page = await this.createPage();

  //     // Reset history
  //     page.resetHistory();
  //   }

  //   this.updatePage(page);
  // }

  async exportImage(cfg?: ExportConfig, block?: BlockModel | MixedBlock | null) {
    if (!block) {
      block = this.getCurrentFrame();
    }

    if (!block) {
      throw new Error('No block found');
    }

    // TODO: support MixedBlock
    if (block.count > 1) {
      throw new Error('Mixed block not supported');
    }

    const node = this.getNode(block as BlockModel);

    if (!node) {
      throw new Error('No node found');
    }

    const mimeType = cfg?.mimeType || 'image/png';
    const ext = mimeType.split('/')[1] || 'png';
    const name = `${block.name || 'xpix-export-image'}.${ext}`;

    const blob = (await node.toBlob(cfg)) as Blob;
    const file = new File([blob], name, {
      type: mimeType
    });

    return file;
  }

  async saveToFile(url: string | Blob) {
    const file = url as File;
    if (url instanceof Blob) {
      url = URL.createObjectURL(url) as string;
    }

    // TODO: stream download
    const linkEl = document.createElement('a');
    linkEl.download = file.name || '';
    linkEl.href = url;
    linkEl.click();
  }

  async toJSON() {
    const page = await this.getPage() as Page;
    const job = new Job({ workspace: page.workspace });

    return job.pageToSnapshot(page);
  }

  fitZoom() {
    const frame = this.getCurrentFrame();
    const node = frame ? this.getNode(frame) : null;

    if (node) {
      this.view?.zoomBy(node);
    }
  }

  zoomIn() {
    this.view?.zoomIn();
  }

  zoomOut() {
    this.view?.zoomOut();
  }

  zoomTo(ratio: number) {
    this.view?.zoomTo(ratio);
  }

  // Tools
  showOpenFilePicker(cfg?: OpenFilePickerOptions) {
    return showOpenFilePicker(cfg);
  }

  async loadImage(url: string | Blob) {
    const blob = await loadBlob(url);
    const image = await loadImage(blob);

    return {
      height: image.naturalHeight,
      width: image.naturalWidth,
      image,
      blob
    };
  }

  // destroy
  destroy() {
    this.view?.destroy();
  }

  async runDemo() {
    await this.addBlock('shape', {
      type: 'rect',
      cornerRadius: 5,
      fill: '#EEE',
      stroke: '#DDD',
      strokeWidth: 2,
      width: 560,
      height: 360,
      x: 20,
      y: 20
    });

    await this.addBlock('shape', {
      type: 'circle',
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
      x: 80,
      y: 80
    });

    await this.addImage('/src/assets/cat1.gif', {
      height: 100,
      width: 100,
      x: 180,
      y: 10
    });

    // await this.addBlock('text', {
    //   content: 'Hello X-Pix-Editor'
    // });
  }
}

export function createEditor(options: EditorConfig): Editor {
  return new Editor(options);
}
