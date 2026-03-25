<script lang="ts">
    let { src, title }: { src: string; title: string } = $props();
    let open = $state(false);
</script>

{#if open}
    <div
        class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
    >
        <div
            class="bg-white border border-black w-full max-w-5xl h-[90vh] flex flex-col"
        >
            <div
                class="flex items-center justify-between px-4 py-2 border-b border-black bg-[#e0e0e0]"
            >
                <span class="font-bold text-sm">{title}</span>
                <div class="flex gap-2">
                    <a href={src} download>
                        <button class="edit-btn">DOWNLOAD</button>
                    </a>
                    <a href={src} target="_blank" rel="noopener noreferrer">
                        <button class="edit-btn">OPEN IN TAB</button>
                    </a>
                    <button class="edit-btn" onclick={() => (open = false)}
                        >CLOSE</button
                    >
                </div>
            </div>
            <iframe {src} {title} class="w-full flex-1 border-none"></iframe>
        </div>
    </div>
{/if}

<button class="edit-btn" onclick={() => (open = true)}>VIEW</button>
