export const blobToFileUrl = (blobData) => {
  const URL = window.URL || window.webkitURL;
  return URL.createObjectURL(blobData);
};

export const downloadPdfFromUrl = (fileURL, fileName = 'demo') => {
  const link = document.createElement('a');
  document.body.appendChild(link);
  link.href = fileURL;
  link.download = `${fileName}.pdf`;
  link.dispatchEvent(new MouseEvent('click'));
  document.body.removeChild(link);
};

export const downloadPdf = (blob, fileName) => {
  const fileUrl = blobToFileUrl(blob);
  downloadPdfFromUrl(fileUrl, fileName);
};
