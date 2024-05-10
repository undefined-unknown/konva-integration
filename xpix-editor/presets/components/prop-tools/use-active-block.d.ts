import { BlockModel } from '../../editor';
import { ComputedRef } from 'vue';

export declare function useActiveBlock(): BlockModel;
export declare function useActiveBlockType(): ComputedRef<string>;
