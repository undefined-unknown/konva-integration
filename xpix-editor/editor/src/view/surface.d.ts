import { BlockStdScope } from '../std';
import { EventEmitter } from 'eventemitter3';
import Konva from 'konva';
import type { XPixBlockModel as BlockModel } from '../base-block';
import { Viewport } from './viewport';
import { Helper } from './helper';
type DocSlotUpdateEvt = {
    type: 'add' | 'delete' | 'update';
    id: string;
    flavour: string;
    model?: BlockModel;
    props?: {
        key: string;
    };
};
export type ViewState = {
    currentFrameId: string;
    zoomRatio: number;
};
export type ViewConfig = {
    root: HTMLDivElement;
    viewState: ViewState;
    std: BlockStdScope;
};
export declare class Surface extends EventEmitter {
    root: HTMLElement;
    viewport: Viewport;
    stage: Konva.Stage;
    std: BlockStdScope;
    helper: Helper;
    viewState: ViewState;
    get doc(): import("@blocksuite/store").Doc;
    constructor(cfg: ViewConfig);
    setStd(std: BlockStdScope, force?: boolean): void;
    getMode(): "board" | "edgeless";
    getRootFrames(): BlockModel<import("../base-block").XPixModelProps>[];
    getCurrentFrame(): BlockModel<import("../base-block").XPixModelProps>;
    switchFrame(frame: BlockModel): void;
    renderRoot(): void;
    render(evt: DocSlotUpdateEvt): void;
    handleRootResize(): void;
    handleEvents(): void;
    getZoomRatios(): number[];
    zoomIn(): void;
    zoomOut(): void;
    zoomTo(ratio: number): void;
    zoomBy(node: Konva.Node): void;
    destroy(): void;
}
export {};
