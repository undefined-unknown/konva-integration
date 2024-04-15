import { Schema, Workspace } from '@blocksuite/store';

import { XPixSchemaList } from './specs';

// Export base types
export { XPixBlockModel } from './base-block';
export {
  Page,
  Workspace,
  BlockModel,

  Schema,
  defineBlockSchema,

  Job
} from '@blocksuite/store';

export function createEmptyPage() {
  // console.log('SchemaList:', XPixSchemaList.reduce((ret, x) => { ret[x.model.flavour] = x; return ret }, {} as { [index: string]: unknown }));

  const schema = new Schema().register(XPixSchemaList);
  const workspace = new Workspace({ schema });
  const page = workspace.createPage();

  // Override updateBlock for diff update
  // const _updateBlock = page.updateBlock;
  // page.updateBlock = async function(model, props) {
  //   const propsDiff = Object.keys(props).reduce((acc, key) => {
  //     if (model[key] !== props[key]) {
  //       acc[key] = props[key];
  //     }

  //     return acc;
  //   }, {});

  //   if (Object.keys(propsDiff).length) {
  //     return _updateBlock.call(page, model, propsDiff);
  //   }
  // };

  page.viewMode = function() {
    const rootModel = this.root;

    return rootModel?.mode || 'page';
  };

  return {
    page,
    async init() {
      await page.load(() => {
        const pageBlockId = page.addBlock('xpix:page', {});

        page.addBlock('xpix:frame', {
          // background: '#F00',
          height: 400,
          width: 600
        }, pageBlockId);

        // const noteId = page.addBlock('affine:note', {}, pageBlockId);
        // page.addBlock('affine:paragraph', {}, noteId);
      });

      return page;
    },
  };
}

export interface MixedBlockProps {
  name: string;
  flavour: string;
  count: number;
};

export interface MixedBlock extends MixedBlockProps {

}

export function createMixedBlock(props: MixedBlockProps): MixedBlock {
  return {
    ...props
  };
};

declare global {
  interface Page {
    viewMode: () => 'page' | 'frame';
  }
}
