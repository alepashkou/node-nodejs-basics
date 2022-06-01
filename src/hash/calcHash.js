import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filePath = path.join(__dirname, './files/fileToCalculateHashFor.txt');

export const calculateHash = async () => {
  const buf = fs.readFileSync(filePath);

  const hash = crypto.createHash('sha256');

  hash.update(buf);

  const hex = hash.digest('hex');

  console.log(hex);
};
calculateHash();
