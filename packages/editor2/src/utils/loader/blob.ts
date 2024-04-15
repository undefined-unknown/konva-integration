// export async function loadBlob(file: Blob): Promise<Blob>;
export async function loadBlob(url: string | Blob): Promise<File> {
  if (url instanceof Blob) {
    return loadBlobFromFile(url);
  }

  return loadBlobFromURL(url);
};

export async function loadBlobFromURL(url: string) {
  const res = await fetch(url);
  const blob = await res.blob();

  return loadBlobFromFile(blob);
}

export async function loadBlobFromFile(file: Blob) {
  if (file instanceof File) {
    return file;
  }

  // TODO: parse file type from blob
  file = new File([file], 'unknown.ext', {
    type: 'application/octet-stream'
  });

  return file as File;
}
