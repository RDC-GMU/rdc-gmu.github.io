import { readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import type { PageServerLoad } from './$types';

function formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export const load: PageServerLoad = async () => {
    const resourcesDir = join(process.cwd(), 'static', 'resources');

    let rawFiles: string[] = [];
    try {
        rawFiles = readdirSync(resourcesDir);
    } catch {
        return { files: [] };
    }

    const files = rawFiles
        .filter((f) => !f.startsWith('.'))
        .map((f) => {
            const stat = statSync(join(resourcesDir, f));
            return {
                name: f.replace(extname(f), '').replace(/[-_]/g, ' '),
                description: `${extname(f).replace('.', '').toUpperCase()} file`,
                src: `/resources/${f}`,
                size: formatBytes(stat.size)
            };
        })
        .sort((a, b) => a.name.localeCompare(b.name));

    return { files };
};
