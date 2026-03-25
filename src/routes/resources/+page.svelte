<script lang="ts">
    import ResourceTable from "$lib/components/ResourceTable.svelte";
    import FileTable from "$lib/components/FileTable.svelte";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();

    const documentation: any[] = [];

    const tools: any[] = [
        {
            name: "Sim-Link",
            description:
                "A web application designed to take the results of Gazebo simulations, save them, rank the best-performing simulations, and display the detailed results in a clean, easy-to-understand format.",
            url: "https://simlink.sirblob.co/",
        },
    ];
</script>

<div class="super-container">
    <ResourceTable title="TOOLS & SOFTWARE" resources={tools} />

    {#if data.files.length > 0}
        <FileTable title="TEAM FILES & DOWNLOADS" files={data.files} />
    {:else}
        <div class="config-category">
            <h2>TEAM FILES & DOWNLOADS</h2>
            <div class="hardware-box">
                <p>
                    No files found in <code>static/resources/</code>. Drop files
                    there and they will appear automatically.
                </p>
            </div>
        </div>
    {/if}
</div>
