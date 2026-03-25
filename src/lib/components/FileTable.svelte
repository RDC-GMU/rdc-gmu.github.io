<script lang="ts">
    import PdfViewer from "./PdfViewer.svelte";

    interface FileEntry {
        name: string;
        description: string;
        src: string;
        size?: string;
    }

    let { title, files }: { title: string; files: FileEntry[] } = $props();

    function isPdf(src: string): boolean {
        return src.toLowerCase().endsWith(".pdf");
    }
</script>

<div class="config-category">
    <h2>{title}</h2>
    <div class="tables-container">
        <div class="table-wrapper">
            <table class="config-table">
                <thead>
                    <tr>
                        <th>FILE</th>
                        <th>DESCRIPTION</th>
                        {#if files.some((f) => f.size)}
                            <th>SIZE</th>
                        {/if}
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {#each files as file}
                        <tr>
                            <td><strong>{file.name}</strong></td>
                            <td>{file.description}</td>
                            {#if files.some((f) => f.size)}
                                <td>{file.size ?? "—"}</td>
                            {/if}
                            <td>
                                <div class="flex gap-2 items-center">
                                    {#if isPdf(file.src)}
                                        <PdfViewer
                                            src={file.src}
                                            title={file.name}
                                        />
                                    {/if}
                                    <a href={file.src} download>
                                        <button class="edit-btn"
                                            >DOWNLOAD</button
                                        >
                                    </a>
                                </div>
                            </td>
                        </tr>
                    {/each}
                    {#if files.length === 0}
                        <tr>
                            <td
                                colspan="4"
                                style="text-align: center; color: #555;"
                                >No files available.</td
                            >
                        </tr>
                    {/if}
                </tbody>
            </table>
        </div>
    </div>
</div>
