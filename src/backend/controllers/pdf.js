import { createBlob } from '../utils/pdf';
import MyDocument from '../documents/MyDocument';

export const downloadPdfController = async () => {
  try {
    return await createBlob(<MyDocument />);
  } catch (error) {
    return { message: error };
  }
};
