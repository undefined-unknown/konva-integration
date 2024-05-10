import type { BlockStdScope } from '../std';
import Konva from 'konva';
export interface SelectionConfig extends Konva.TransformerConfig {
    std: BlockStdScope;
}
export declare class Selection extends Konva.Transformer {
    std: BlockStdScope;
    get doc(): import("@blocksuite/store").Doc;
    constructor(cfg: SelectionConfig);
    setStd(std: BlockStdScope, force?: boolean): void;
    select(nodes: Konva.Node[]): void;
    clear(): void;
    updateMeta(): void;
    reset(): void;
}
