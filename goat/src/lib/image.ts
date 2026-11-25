import { existsSync } from 'node:fs';
import { join } from 'node:path';
import type { ImageSlot } from '../data/goat';

export function imageIsReady(image: ImageSlot): boolean {
  const src = image.src.trim();
  if (!src || src.startsWith('//') || src.includes('..')) return false;
  if (/^https?:\/\//i.test(src)) return true;
  const relative = src.replace(/^\/+/, '');
  return existsSync(join(process.cwd(), 'public', relative));
}
