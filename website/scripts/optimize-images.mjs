import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OPTIMIZED_DIR = path.join(PUBLIC_DIR, 'optimized');

// Images to optimize with their settings
const imagesToOptimize = [
  // Logo - keep reasonable size for header
  {
    input: 'logo.png',
    output: 'logo.webp',
    width: 200,
    quality: 85
  },
  // Team photos - optimize for cards (typically 300-400px display)
  {
    input: 'ibrohim-r.jpg',
    output: 'ibrohim-r.webp',
    width: 400,
    quality: 80
  },
  {
    input: 'ibrohim-a.jpg',
    output: 'ibrohim-a.webp',
    width: 400,
    quality: 80
  },
  {
    input: 'ibrohim-u.jpg',
    output: 'ibrohim-u.webp',
    width: 400,
    quality: 80
  },
  {
    input: 'Ibrohim-i.jpg',
    output: 'ibrohim-i.webp',
    width: 400,
    quality: 80
  },
  {
    input: 'begzod.jpg',
    output: 'begzod.webp',
    width: 400,
    quality: 80
  },
  // Partner logos
  {
    input: 'natex.png',
    output: 'natex.webp',
    width: 128,
    quality: 85
  },
  {
    input: 'FIT.png',
    output: 'FIT.webp',
    width: 128,
    quality: 85
  },
];

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  // Create optimized directory if it doesn't exist
  if (!existsSync(OPTIMIZED_DIR)) {
    await mkdir(OPTIMIZED_DIR, { recursive: true });
    console.log('Created optimized directory\n');
  }

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const img of imagesToOptimize) {
    const inputPath = path.join(PUBLIC_DIR, img.input);
    const outputPath = path.join(OPTIMIZED_DIR, img.output);

    if (!existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${img.input} - file not found`);
      continue;
    }

    try {
      const inputBuffer = await sharp(inputPath).toBuffer();
      const originalSize = inputBuffer.length;
      totalOriginal += originalSize;

      const outputBuffer = await sharp(inputPath)
        .resize(img.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: img.quality })
        .toBuffer();

      const optimizedSize = outputBuffer.length;
      totalOptimized += optimizedSize;

      await sharp(outputBuffer).toFile(outputPath);

      const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
      console.log(`✅ ${img.input} → ${img.output}`);
      console.log(`   ${(originalSize / 1024).toFixed(1)}KB → ${(optimizedSize / 1024).toFixed(1)}KB (${savings}% smaller)\n`);
    } catch (error) {
      console.log(`❌ Error optimizing ${img.input}: ${error.message}\n`);
    }
  }

  console.log('='.repeat(50));
  console.log(`Total: ${(totalOriginal / 1024).toFixed(1)}KB → ${(totalOptimized / 1024).toFixed(1)}KB`);
  console.log(`Saved: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
  console.log('='.repeat(50));
  console.log('\nOptimized images saved to /public/optimized/');
  console.log('Update your code to use the new paths (e.g., /optimized/logo.webp)');
}

optimizeImages().catch(console.error);
