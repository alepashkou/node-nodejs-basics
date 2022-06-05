import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, './files/fresh.txt');

const fileText = 'I am fresh and young';

export const create = async () => {
  fs.writeFile(filePath, fileText, { flag: 'wx' })
    .then(() => console.log('Saved!'))
    .catch(() => {
      throw new Error('FS operation failed');
    });
};
create();
