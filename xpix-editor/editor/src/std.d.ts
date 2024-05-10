import { type BlockStdOptions, BlockStdScope } from '@blocksuite/block-std';
import type { Editor } from './editor';
export { type Disposable, DisposableGroup } from '@blocksuite/global/utils';
export { type BlockStdOptions, BlockStdScope, BaseSelection } from '@blocksuite/block-std';
export interface XPiXBlockStdOptions extends BlockStdOptions {
    editor: Editor;
}
export declare class XPiXBlockStdScope extends BlockStdScope {
    editor: Editor;
    constructor(options: XPiXBlockStdOptions);
}
