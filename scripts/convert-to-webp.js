#!/usr/bin/env node

/**
 * Convert PNG images to WebP format for faster loading
 * Usage: npm run to-webp
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const QUALITY = 80; // WebP quality (0-100)

async function getPngFiles(dir) {
  try {
    const files = await fs.readdir(dir);
    return files.filter(file => file.toLowerCase().endsWith('.png'));
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
    return [];
  }
}

async function getFileStats(filepath) {
  try {
    return await fs.stat(filepath);
  } catch {
    return null;
  }
}

async function convertToWebp(pngPath) {
  const filename = path.basename(pngPath, '.png');
  const webpPath = path.join(path.dirname(pngPath), `${filename}.webp`);

  // Check if WebP already exists and is newer
  const [pngStats, webpStats] = await Promise.all([
    getFileStats(pngPath),
    getFileStats(webpPath),
  ]);

  if (!pngStats) {
    console.log(`  ⚠ Skipping ${filename}.png (source not found)`);
    return null;
  }

  if (webpStats && webpStats.mtime > pngStats.mtime) {
    console.log(`  ✓ ${filename}.webp (up to date)`);
    return {
      filename: `${filename}.webp`,
      originalSize: pngStats.size,
      convertedSize: webpStats.size,
      skipped: true,
    };
  }

  // Perform conversion
  try {
    await sharp(pngPath)
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const newWebpStats = await getFileStats(webpPath);
    const savings = ((1 - newWebpStats.size / pngStats.size) * 100).toFixed(1);

    console.log(`  ✓ ${filename}.webp (${formatBytes(pngStats.size)} → ${formatBytes(newWebpStats.size)}, ${savings}% smaller)`);

    return {
      filename: `${filename}.webp`,
      originalSize: pngStats.size,
      convertedSize: newWebpStats.size,
      skipped: false,
    };
  } catch (error) {
    console.error(`  ✗ Error converting ${filename}.png:`, error.message);
    return null;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
}

async function main() {
  console.log('🖼️  Converting PNG images to WebP format...\n');

  const pngFiles = await getPngFiles(IMAGES_DIR);

  if (pngFiles.length === 0) {
    console.log('No PNG files found in public/images/');
    process.exit(0);
  }

  console.log(`Found ${pngFiles.length} PNG file(s)\n`);

  const results = [];
  for (const file of pngFiles) {
    const pngPath = path.join(IMAGES_DIR, file);
    const result = await convertToWebp(pngPath);
    if (result) results.push(result);
  }

  // Summary
  console.log('\n📊 Summary:');
  console.log(`  Total files: ${results.length}`);

  const converted = results.filter(r => !r.skipped);
  const skipped = results.filter(r => r.skipped);

  if (converted.length > 0) {
    const totalOriginal = converted.reduce((sum, r) => sum + r.originalSize, 0);
    const totalConverted = converted.reduce((sum, r) => sum + r.convertedSize, 0);
    const totalSavings = ((1 - totalConverted / totalOriginal) * 100).toFixed(1);

    console.log(`  Converted: ${converted.length}`);
    console.log(`  Skipped (up to date): ${skipped.length}`);
    console.log(`  Total size reduction: ${formatBytes(totalOriginal)} → ${formatBytes(totalConverted)} (${totalSavings}%)`);
  } else if (skipped.length > 0) {
    console.log(`  All ${skipped.length} file(s) already up to date`);
  }

  console.log('\n✨ Done!');
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
