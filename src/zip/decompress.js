import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const decompress = async () => {
  const input = fs.createReadStream(path.join(__dirname, './files/archive.gz'));
  const output = fs.createWriteStream(
    path.join(__dirname, './files/fileToCompress.txt')
  );
  input.pipe(zlib.createUnzip()).pipe(output);
};
decompress();
