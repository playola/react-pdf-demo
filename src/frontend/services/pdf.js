import { downloadPdfController } from '../../backend/controllers/pdf';
import { downloadPdf } from '../utils/pdf';

export const downloadService = () => downloadPdfController().then(downloadPdf);
