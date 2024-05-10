import type { BlockStdScope } from '../std';
import Konva from 'konva';
import { XPixBlockModel as BlockModel } from '../base-block';
import type { XPixBaseBlock } from '../base-block';
export interface XPixRenderConfig {
    action: '' | 'add' | 'update' | 'delete';
    std: BlockStdScope;
    stage: Konva.Stage;
    parent?: BlockModel;
    props?: {
        [key: string]: unknown;
    };
}
export declare class XPixComponent {
    Block: XPixBaseBlock;
    constructor(Block: XPixBaseBlock);
    add(model: BlockModel, cfg: XPixRenderConfig): void;
    remove(model: BlockModel, cfg: XPixRenderConfig): void;
    update(model: BlockModel, cfg: XPixRenderConfig): void;
    renderChildren(model: BlockModel, cfg: XPixRenderConfig): void;
    getNode(model: BlockModel, cfg: XPixRenderConfig): import("konva/lib/Node").Node<import("konva/lib/Node").NodeConfig> | undefined;
}
