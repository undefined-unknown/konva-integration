import { BlockStdScope } from '../std';
import Konva from 'konva';
export interface ViewportConfig extends Konva.LayerConfig {
    stage: Konva.Stage;
    std: BlockStdScope;
}
export declare class Viewport extends Konva.Layer {
    std: BlockStdScope;
    stage: Konva.Stage;
    viewPadding: number;
    zoomRatio: number;
    get doc(): import("@blocksuite/store").Doc;
    constructor(cfg: ViewportConfig);
    setStd(std: BlockStdScope, force?: boolean): void;
    updateMeta(): void;
    centerAnchor(ratio?: number): void;
    zoomTo(ratio?: number): void;
    getScrollLimit(): {
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
    };
    scrollTo(x: number, y: number): boolean;
    onResize(): void;
    handleEvents(): void;
    reset(): void;
}
