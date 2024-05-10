import Konva from 'konva';
import { XPixBlockModel } from '../base-block';
export interface ShapeBlockProps extends Konva.ContainerConfig {
    type: 'shape' | 'circle' | 'rect';
    radius?: number;
    fill?: string;
}
export declare class ShapeBlockModel extends XPixBlockModel<ShapeBlockProps> {
    constructor();
    static flavour: string;
    static metadata: {
        version: number;
        role: string;
        parent: string[];
    };
    static props(): ShapeBlockProps;
}
