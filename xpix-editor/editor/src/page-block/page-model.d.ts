import Konva from 'konva';
import { XPixBlockModel } from '../base-block';
export interface PageBlockProps extends Konva.ContainerConfig {
    mode: 'board' | 'edgeless';
}
export declare class PageBlockModel extends XPixBlockModel<PageBlockProps> {
    constructor();
    static flavour: string;
    static metadata: {
        version: number;
        role: string;
        children: string[];
    };
    static props(): PageBlockProps;
}
