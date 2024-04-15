
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

export const defaultOpenFilePickerOptions: OpenFilePickerOptions = {
  multiple: false,
  excludeAcceptAllOption: true,
  accept: {
    'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
  }
};

export async function showOpenFilePicker(cfg = defaultOpenFilePickerOptions) {
  // Fix cfg
  if (cfg) {
    if (cfg.excludeAcceptAllOption === undefined) {
      cfg.excludeAcceptAllOption = true;
    }

    if (cfg.accept && !cfg.types) {
      cfg.types = [{
        accept: cfg.accept
      }];
    }
  }

  if (window.showOpenFilePicker) {
    const handles = await window.showOpenFilePicker(cfg);

    return Promise.all(handles.map(handle => handle.getFile()));
  }

  throw new Error('File picker not supported');
}

declare global {
  interface Window {
    showOpenFilePicker: (cfg: OpenFilePickerOptions) => Promise<FileSystemFileHandle[]>;
  }
}
