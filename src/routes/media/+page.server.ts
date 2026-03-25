import { readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import type { PageServerLoad } from './$types';

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.avif'];
const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.ogg', '.mov'];

export const load: PageServerLoad = async () => {
    const mediaDir = join(process.cwd(), 'static', 'media');

    let files: string[] = [];
    try {
        files = readdirSync(mediaDir);
    } catch {
        return { images: [], videos: [] };
    }

    const images = files
        .filter((f) => IMAGE_EXTENSIONS.includes(extname(f).toLowerCase()))
        .filter((f) => !f.startsWith('.'))
        .map((f) => {
            const stat = statSync(join(mediaDir, f));
            return {
                src: `/media/${f}`,
                caption: f.replace(extname(f), '').replace(/[-_]/g, ' '),
                date: stat.mtime.toISOString().split('T')[0]
            };
        })
        .sort((a, b) => b.date.localeCompare(a.date));

    const videos = files
        .filter((f) => VIDEO_EXTENSIONS.includes(extname(f).toLowerCase()))
        .filter((f) => !f.startsWith('.'))
        .map((f) => {
            const stat = statSync(join(mediaDir, f));
            return {
                src: `/media/${f}`,
                title: f.replace(extname(f), '').replace(/[-_]/g, ' '),
                date: stat.mtime.toISOString().split('T')[0]
            };
        })
        .sort((a, b) => b.date.localeCompare(a.date));

    return { images, videos };
};
