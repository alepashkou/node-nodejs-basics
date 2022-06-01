import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, './files/fileToRemove.txt');

export const remove = async () => {
  fs.unlink(filePath)
    .then(() => console.log('Deleted!'))
    .catch(() => {
      throw new Error('FS operation failed');
    });
};
remove();
