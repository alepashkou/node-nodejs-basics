import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputPath = path.join(__dirname, './files');
const outputPath = path.join(__dirname, './files_copy');

export const copy = async () => {
  const copy = (input, output) => {
    fs.copyFile(input, output).catch(() => {
      throw new Error('FS operation failed');
    });
  };
  fs.readdir(inputPath)
    .then((files) => {
      fs.mkdir(outputPath)
        .then(() => {
          files.forEach((el) => {
            const fileInput = inputPath + '/' + el;
            const fileOutput = outputPath + '/' + el;
            copy(fileInput, fileOutput);
          });
        })
        .catch(() => {
          throw new Error('FS operation failed');
        })
        .finally(() => console.log('Copied!'));
    })
    .catch(() => {
      throw new Error('FS operation failed');
    });
};
copy();
