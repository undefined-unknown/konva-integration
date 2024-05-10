import type { Doc, DocSnapshot } from '@blocksuite/store';
export type { DocSnapshot } from '@blocksuite/store';
export { XPixBlockModel } from './base-block';
export { Doc, DocCollection, BlockModel, Schema, defineBlockSchema, Job, } from '@blocksuite/store';
export declare function createDoc(id?: string): Doc;
export declare function createEmptyDoc(): Doc;
export declare function initDoc(doc: Doc): Doc;
export declare function loadDoc(id?: string): Promise<Doc>;
export declare function fromJSON(json: DocSnapshot): Promise<Doc>;
export declare function toJSON(doc: Doc): Promise<DocSnapshot | null>;
export interface MixedBlockProps {
    name: string;
    flavour: string;
    count: number;
}
export interface MixedBlock extends MixedBlockProps {
    doc: Doc;
}
export declare function createMixedBlock(doc: Doc, props: MixedBlockProps): MixedBlock;
