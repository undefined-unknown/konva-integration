import Konva from 'konva';
import { XPixBlockModel } from '../base-block';
export interface FrameBlockProps extends Konva.ContainerConfig {
    name?: string;
    background?: string;
}
export declare class FrameBlockModel extends XPixBlockModel<FrameBlockProps> {
    constructor();
    static flavour: string;
    static metadata: {
        version: number;
        role: string;
        parent: string[];
    };
    static props(): FrameBlockProps;
}
