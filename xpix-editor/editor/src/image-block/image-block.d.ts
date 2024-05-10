import Konva from 'konva';
import { ImageBlockModel } from './image-model';
import { XPixBaseBlock as BaseBlock, type XPixRenderConfig } from '../base-block';
export interface ImageBlockConfig extends Konva.ContainerConfig {
    model: ImageBlockModel;
}
export declare class ImageBlock extends BaseBlock {
    static Model: typeof ImageBlockModel;
    mounted(): void;
    onUpdate(cfg: XPixRenderConfig): void;
    assetId: string;
    assetURL: string;
    assetImage?: CanvasImageSource;
    updateImage(): Promise<void>;
    buildNode(): void;
}
