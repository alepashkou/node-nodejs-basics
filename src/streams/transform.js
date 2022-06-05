import { Transform } from 'stream';
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

export const transform = async () => {
  console.log('Enter data');
  process.stdin.pipe(transformStream).pipe(process.stdout);
};
transform();
