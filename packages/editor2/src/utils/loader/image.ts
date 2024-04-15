// export async function loadImage(img: CanvasImageSource): Promise<HTMLImageElement> {
// export async function loadImage(file: Blob);
export async function loadImage(url: string | Blob) {
  if (url instanceof Blob) {
    return loadImageFromFile(url);
  }

  return loadImageFromURL(url);
};

export async function loadImageFromFile(file: Blob, autoRevoke: boolean = true): Promise<HTMLImageElement> {
  const url = URL.createObjectURL(file);

  // TODO: fix revokeObjectURL
  if (autoRevoke) {
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 6400);
  }

  return loadImageFromURL(url);
}

export async function loadImageFromURL(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');

    img.onload = () => {
      img.height = img.naturalHeight;
      img.width = img.naturalWidth;

      resolve(img);
    };

    img.onerror = () => {
      reject(new Error('Image load error: ' + url));
    };

    img.crossOrigin = 'Anonymous';
    img.src = url;
  });
}


// export async function loadImageFromCanvas(img: CanvasImageSource): Promise<HTMLImageElement> {
//   const fixedImg: CanvasImageSource = await new Promise((resolve, reject) => {
//     if (!(img instanceof Image) || img.complete) {
//       resolve(img);
//       return;
//     }

//     img.onload = () => {
//       resolve(img);
//     };

//     img.onerror = () => {
//       reject(new Error('Image load error: ' + img));
//     };
//   });

//   return new Promise((resolve, reject) => {
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');

//     if (!ctx) {
//       throw new Error('Create canvas context error');
//     }

//     canvas.height = fixedImg?.videoHeight || fixedImg?.height || 100;
//     canvas.width = fixedImg?.videoWidth || fixedImg?.width || 100;

//     ctx.drawImage(fixedImg, 0, 0);

//     canvas.toBlob(blob => {
//       if(!blob) {
//         reject(new Error('Image load error from blob'));
//         return;
//       }

//       resolve(loadImageFromFile(blob));
//     }, 'png');
//   });
// }

