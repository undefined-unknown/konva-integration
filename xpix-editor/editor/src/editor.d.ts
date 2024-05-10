import type { Doc, DocSnapshot, MixedBlock } from './doc';
import type { XPixBaseBlock, XPixBlockModel as BlockModel, XPixModelProps } from './base-block';
import { XPiXBlockStdScope as BlockStdScope } from './std';
import type { FrameBlockProps } from './frame-block';
import { Surface, type ViewState } from './view';
import { type OpenFilePickerOptions } from './utils/picker';
import { EventEmitter } from 'eventemitter3';
export type Flavour = BlockSuite.Flavour;
export { type BlockModel };
export * from './std';
export * from './doc';
export type { ViewState } from './view';
export type EditorConfig = {
    root: HTMLDivElement;
    useLocalDraft?: boolean;
};
export type ExportConfig = {
    mimeType?: string;
    quality?: number;
    pixelRatio?: number;
    imageSmoothingEnabled?: boolean;
};
export declare class Editor extends EventEmitter {
    config: EditorConfig;
    root: HTMLDivElement;
    std: BlockStdScope;
    view: Surface;
    _doc: Doc;
    get doc(): Doc;
    viewState: ViewState;
    get viewMode(): "board" | "edgeless";
    constructor(cfg: EditorConfig);
    get canUndo(): boolean;
    get canRedo(): boolean;
    undo(): void;
    redo(): void;
    get command(): import("@blocksuite/block-std").CommandManager;
    get event(): import("@blocksuite/block-std").UIEventDispatcher;
    get selection(): import("@blocksuite/block-std").SelectionManager;
    init(): Promise<void>;
    getStd(): BlockStdScope;
    createDoc(): Doc;
    loadDoc(id?: string): Promise<Doc>;
    setDoc(doc: Doc): void;
    getRootFrames(): BlockModel<XPixModelProps>[];
    getCurrentFrame(): BlockModel<XPixModelProps>;
    addFrame(props: FrameBlockProps): BlockModel<XPixModelProps>;
    switchFrame(frame: BlockModel): BlockModel<XPixModelProps>;
    getSelections(): import("@blocksuite/block-std/dist/selection/base").BaseSelection[];
    getActiveBlock(selections?: import("@blocksuite/block-std/dist/selection/base").BaseSelection[]): BlockModel<XPixModelProps> | MixedBlock | null;
    getBlockById(blockId: string): BlockModel<XPixModelProps> | null;
    getBlockType(block?: BlockModel<XPixModelProps> | MixedBlock | null, upperCase?: boolean): string;
    getAddableRoot(): BlockModel<XPixModelProps>;
    addImage(url: string | Blob, props?: XPixModelProps, parent?: BlockModel<XPixModelProps>): Promise<BlockModel<XPixModelProps>>;
    getActiveNode(selections?: import("@blocksuite/block-std/dist/selection/base").BaseSelection[]): XPixBaseBlock | null;
    getNode(idOrModel: string | BlockModel | MixedBlock): XPixBaseBlock | null;
    addBlock(type: string, props?: XPixModelProps, parent?: BlockModel<XPixModelProps>): BlockModel<XPixModelProps>;
    updateBlock(block: BlockModel, props: XPixModelProps): void;
    removeBlock(block: BlockModel): void;
    addAsset(blob: Blob, id?: string): string | Promise<string>;
    select(blocks: BlockModel | BlockModel[]): void;
    fitZoom(): void;
    zoomIn(): void;
    zoomOut(): void;
    zoomTo(ratio: number): void;
    showOpenFilePicker(cfg?: OpenFilePickerOptions): Promise<File[]>;
    loadImage(url: string | Blob): Promise<{
        height: number;
        width: number;
        image: HTMLImageElement;
        blob: File;
    }>;
    exportImage(cfg?: ExportConfig, block?: BlockModel | MixedBlock | null): Promise<File>;
    saveToFile(url: string | Blob): Promise<void>;
    fromJSON(json: DocSnapshot): Promise<void>;
    toJSON(): Promise<DocSnapshot | null>;
    destroy(): void;
    runDemo(): Promise<void>;
}
export declare function createEditor(options: EditorConfig): Editor;