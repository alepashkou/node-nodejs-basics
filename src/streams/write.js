import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const write = async () => {
  const wStream = fs.createWriteStream(
    path.join(__dirname, 'files/fileToWrite.txt')
  );
  console.log('Enter the information for the write.');
  process.stdin.on('data', (value) => {
    wStream.write(value);
    console.log('Writed!');
    process.exit();
  });
};
write();
