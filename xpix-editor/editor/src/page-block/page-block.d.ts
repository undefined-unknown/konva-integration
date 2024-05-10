import Konva from 'konva';
import { XPixBaseBlock as BaseBlock } from '../base-block';
import { PageBlockModel } from './page-model';
export interface PageBlockConfig extends Konva.ContainerConfig {
    model: PageBlockModel;
}
export declare class PageBlock extends BaseBlock {
    static Model: typeof PageBlockModel;
    buildNode(): void;
}
