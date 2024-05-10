export interface OpenFilePickerOptionsAccept {
    [key: string]: string[];
}
export interface OpenFilePickerOptionsType {
    accept: OpenFilePickerOptionsAccept;
    description?: string;
}
export interface OpenFilePickerOptions {
    multiple?: boolean;
    excludeAcceptAllOption?: boolean;
    types?: OpenFilePickerOptionsType[];
    accept?: OpenFilePickerOptionsAccept;
}
export declare const defaultOpenFilePickerOptions: OpenFilePickerOptions;
export declare function showOpenFilePicker(cfg?: OpenFilePickerOptions): Promise<File[]>;
declare global {
    interface Window {
        showOpenFilePicker: (cfg: OpenFilePickerOptions) => Promise<FileSystemFileHandle[]>;
    }
}
