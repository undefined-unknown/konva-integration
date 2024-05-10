import { XPixBaseModel as BaseModel } from './base-model';
import type { XPixRenderConfig } from '../specs/component';
import { XPiXBlockStdScope as BlockStdScope } from '../std';
import Konva from 'konva';
export type { XPixRenderConfig } from '../specs/component';
type ModelProps = {
    [index: string]: unknown;
};
export interface PickModelConfig {
    keys?: string[];
    initProps?: ModelProps;
    afterPick?: (attrs: ModelProps) => void;
}
export interface XPixBlockConfig extends Konva.GroupConfig {
    std: BlockStdScope;
    model: BaseModel;
}
export declare class XPixBaseBlock extends Konva.Group {
    static Model: typeof BaseModel;
    static pickModelProps(model: BaseModel, cfg?: PickModelConfig): ModelProps;
    std: BlockStdScope;
    model: BaseModel;
    constructor(cfg: XPixBlockConfig);
    created(): void;
    mounted(): void;
    unmounted(): void;
    onUpdate(cfg: XPixRenderConfig): void;
    onDestroy(): void;
    mount(cfg: XPixRenderConfig): void;
    update(cfg: XPixRenderConfig): void;
    getMainKeys(): string[];
    _mainNode?: Konva.Shape;
    buildNode(): void;
    getParentNode(cfg: XPixRenderConfig): import("konva/lib/Node").Node<import("konva/lib/Node").NodeConfig> | undefined;
    centerModel(model: BaseModel, parentNode: Konva.Container): void;
    pickModelProps(cfg: PickModelConfig): ModelProps;
    destroy(): this;
}
