import type { BlockStdScope } from '../std';
import type { Surface } from './surface';
import { Selection } from './selection';
import { Selector } from './selector';
import { Scroller } from './scroller';
import Konva from 'konva';
export interface HelperConfig {
    std: BlockStdScope;
    view: Surface;
}
export declare class Helper {
    container: Konva.Layer;
    selection: Selection;
    selector: Selector;
    scroller: Scroller;
    std: BlockStdScope;
    view: Surface;
    get doc(): import("@blocksuite/store").Doc;
    get viewport(): import("./viewport").Viewport;
    get stage(): import("konva/lib/Stage").Stage;
    constructor(cfg: HelperConfig);
    updateMeta(): void;
    handleEvents(): void;
    setStd(std: BlockStdScope, force?: boolean): void;
    reset(): void;
}
