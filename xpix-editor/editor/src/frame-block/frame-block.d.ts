import Konva from 'konva';
import { XPixBaseBlock as BaseBlock, type XPixRenderConfig, type XPixBlockConfig } from '../base-block';
import { FrameBlockModel } from './frame-model';
export interface FrameBlockConfig extends Konva.ContainerConfig {
    model: FrameBlockModel;
}
export declare class FrameBlock extends BaseBlock {
    static Model: typeof FrameBlockModel;
    constructor(cfg: XPixBlockConfig);
    fitViewMode(): void;
    mounted(): void;
    onUpdate(cfg: XPixRenderConfig): void;
    buildNode(): void;
}
