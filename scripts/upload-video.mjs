import { put } from '@vercel/blob';
import { readFileSync } from 'fs';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const file = readFileSync('./public/video/bg.mp4');

const blob = await put('bg.mp4', file, {
  access: 'public',
  contentType: 'video/mp4',
  token: process.env.vision_READ_WRITE_TOKEN,
});

console.log('✅ Upload berhasil!');
console.log('🔗 URL Video:', blob.url);