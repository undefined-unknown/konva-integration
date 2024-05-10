import { XPixComponent } from './component';
import { PageBlock } from '../page-block';
import { FrameBlock } from '../frame-block';
import { ShapeBlock } from '../shape-block';
import { ImageBlock } from '../image-block';
export declare const XPixBlockList: (typeof FrameBlock | typeof PageBlock | typeof ShapeBlock | typeof ImageBlock)[];
export declare const XPixBlockSpecs: {
    schema: {
        version: number;
        model: {
            props: import("@blocksuite/store").PropsGetter<import("../base-block").XPixModelProps>;
            flavour: string;
        } & import("../base-block").XPixModelMetadata;
        onUpgrade?: ((data: import("../base-block").XPixModelProps, previousVersion: number, latestVersion: number) => void) | undefined;
        transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<import("../base-block").XPixModelProps>) | undefined;
    };
    view: {
        component: XPixComponent;
    };
}[];
export declare const XPixSchemaList: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<import("../base-block").XPixModelProps>;
        flavour: string;
    } & import("../base-block").XPixModelMetadata;
    onUpgrade?: ((data: import("../base-block").XPixModelProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<import("../base-block").XPixModelProps>) | undefined;
}[];
declare global {
    namespace BlockSuite {
        interface ComponentType {
            konva: XPixComponent;
        }
        interface BlockModels {
            'xpix:page': typeof PageBlock.Model;
            'xpix:frame': typeof FrameBlock.Model;
            'xpix:shape': typeof ShapeBlock.Model;
            'xpix:image': typeof ImageBlock.Model;
        }
    }
}
