import Konva from 'konva';
import { XPixBlockModel } from '../base-block';
export interface ImageBlockProps extends Konva.ContainerConfig {
    caption: string;
    assetId: string;
}
export declare class ImageBlockModel extends XPixBlockModel<ImageBlockProps> {
    constructor();
    static flavour: string;
    static metadata: {
        version: number;
        role: string;
        parent: string[];
    };
    static props(): ImageBlockProps;
}
