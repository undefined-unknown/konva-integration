import { BlockModel } from '../doc';
import Konva from 'konva';
export interface XPixModelMetadata {
    version: number;
    role: "root" | "hub" | "content";
    parent?: string[];
    children?: string[];
}
export interface XPixModelProps extends Konva.NodeConfig {
    name?: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    rotation?: number;
    scaleX?: number;
    scaleY?: number;
}
export declare class XPixBlockModel<Props extends object = XPixModelProps> extends BlockModel<Props> {
    constructor();
    getFullId(): string;
    static flavour: string;
    static metadata: {
        version: number;
        role: string;
    };
    static props(): XPixModelProps;
    static defineSchema(): {
        version: number;
        model: {
            props: import("@blocksuite/store").PropsGetter<XPixModelProps>;
            flavour: string;
        } & XPixModelMetadata;
        onUpgrade?: ((data: XPixModelProps, previousVersion: number, latestVersion: number) => void) | undefined;
        transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<XPixModelProps>) | undefined;
    };
}
export declare class XPixBaseModel extends XPixBlockModel<XPixModelProps> {
}
