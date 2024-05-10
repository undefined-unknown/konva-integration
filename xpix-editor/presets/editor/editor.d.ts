import { Ref } from 'vue';
import { Editor, Doc, BaseSelection, XPixBlockModel, ViewState } from '../../../editor/src/index.ts';

export type BlockModel = XPixBlockModel;
export * from '../../../editor/src/index.ts';
export interface EditorState {
    editor: Editor;
    docs: Ref<Doc[]>;
    doc: Ref<Doc | undefined>;
    selections: Ref<BaseSelection[]>;
    viewState: Ref<ViewState>;
}
export interface EditorInstance {
    editorState: Ref<EditorState | null>;
}
export declare function createEditor(): EditorInstance;
export declare function installEditor(root: HTMLDivElement): Promise<EditorInstance>;
export declare function uninstallEditor(): void;
export declare function useEditor(): EditorState;
