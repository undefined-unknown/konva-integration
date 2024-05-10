import Konva from 'konva';
import { XPixBaseBlock as BaseBlock, type XPixRenderConfig } from '../base-block';
import { ShapeBlockModel } from './shape-model';
export interface ShapeBlockConfig extends Konva.ContainerConfig {
    model: ShapeBlockModel;
}
export declare class ShapeBlock extends BaseBlock {
    static Model: typeof ShapeBlockModel;
    onUpdate(cfg: XPixRenderConfig): void;
    buildNode(): void;
}
