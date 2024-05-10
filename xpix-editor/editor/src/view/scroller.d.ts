import type { Viewport } from './viewport';
import Konva from 'konva';
export interface ScrollerConfig extends Konva.GroupConfig {
    viewport: Viewport;
    stage: Konva.Stage;
}
export declare class Scroller extends Konva.Group {
    className: string;
    viewport: Viewport;
    stage: Konva.Stage;
    hBar: ScrollBar;
    vBar: ScrollBar;
    constructor(cfg: ScrollerConfig);
    getLimit(): {
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
    };
    scrollTo(x: number, y: number): boolean;
    update(): void;
    handleEvents(): void;
}
export interface ScrollBarConfig extends Konva.RectConfig {
    dir: 'horizontal' | 'vertical';
    viewport: Viewport;
    margin: number;
    size: number;
}
export declare class ScrollBar extends Konva.Rect {
    viewport: Viewport;
    constructor(cfg: ScrollBarConfig);
    update(): void;
}
