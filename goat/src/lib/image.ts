import { existsSync } from 'node:fs';
import { join } from 'node:path';
import type { ImageSlot } from '../data/goat';

export function imageIsReady(image: ImageSlot): boolean {
  const src = image.src.trim();
  if (!src.startsWith('/') || src.startsWith('//') || src.includes('..') || src.includes('\\')) return false;
  const relative = src.slice(1);
  return existsSync(join(process.cwd(), 'public', relative));
}
