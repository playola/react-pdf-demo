import { pdf } from '@react-pdf/renderer';

export const createBlob = (Component) => pdf(Component).toBlob();
