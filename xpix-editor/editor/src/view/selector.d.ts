import type { Selection } from './selection';
import type { Viewport } from './viewport';
import Konva from 'konva';
export interface SelectorConfig extends Konva.NodeConfig {
    selection: Selection;
    container: Viewport;
    stage: Konva.Stage;
}
export declare class Selector extends Konva.Rect {
    className: string;
    selection: Selection;
    container: Viewport;
    stage: Konva.Stage;
    dragging: boolean;
    selecting: boolean;
    selectPoints: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    };
    constructor(cfg: SelectorConfig);
    onPointerDown(e: Konva.KonvaPointerEvent): void;
    onPointerMove(e: Konva.KonvaPointerEvent): void;
    onPointerUp(e: Konva.KonvaPointerEvent): void;
    onPointerClick(e: Konva.KonvaPointerEvent): void;
    onDragStart(): void;
    onDragEnd(e: Konva.KonvaEventObject<DragEvent>): void;
    handleEvents(): void;
    updateMeta(): void;
    reset(): void;
}
