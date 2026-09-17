import sharp from 'sharp';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, '../public');

const targets = [
  { input: 'weather.png',           output: 'weather.webp',           quality: 78, width: 800 },
  { input: 'hero-illustration.png', output: 'hero-illustration.webp', quality: 82, width: 700 },
  { input: 'URL monitoring.png',    output: 'url-monitoring.webp',    quality: 80, width: 800 },
  { input: 'project-crypto.png',    output: 'project-crypto.webp',    quality: 80, width: 800 },
  { input: 'Techpay.jpeg',          output: 'techpay.webp',           quality: 80, width: 800 },
  { input: 'extension.png',         output: 'extension.webp',         quality: 80, width: 800 },
];

async function getFileSize(filePath) {
  try { const s = await stat(filePath); return (s.size / 1024).toFixed(1) + ' KB'; }
  catch { return 'N/A'; }
}

console.log('Compressing images...\n');
for (const { input, output, quality, width } of targets) {
  const inPath  = path.join(PUBLIC_DIR, input);
  const outPath = path.join(PUBLIC_DIR, output);
  try {
    let pipeline = sharp(inPath);
    if (width) pipeline = pipeline.resize({ width, withoutEnlargement: true });
    await pipeline.webp({ quality }).toFile(outPath);
    const before = await getFileSize(inPath);
    const after  = await getFileSize(outPath);
    console.log(`OK  ${input.padEnd(28)} ${before.padStart(10)}  ->  ${after.padStart(10)}`);
  } catch (err) {
    console.error(`ERR ${input}: ${err.message}`);
  }
}
console.log('\nDone!');
