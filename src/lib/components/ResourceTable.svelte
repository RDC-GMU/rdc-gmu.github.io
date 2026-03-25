<script lang="ts">
    import type { Snippet } from "svelte";

    interface Resource {
        name: string;
        description: string;
        url: string;
        label?: string;
    }

    let { title, resources }: { title: string; resources: Resource[] } =
        $props();
</script>

<div class="config-category">
    <h2>{title}</h2>
    <div class="tables-container">
        <div class="table-wrapper">
            <table class="config-table">
                <thead>
                    <tr>
                        <th>RESOURCE</th>
                        <th>DESCRIPTION</th>
                        <th>LINK</th>
                    </tr>
                </thead>
                <tbody>
                    {#each resources as res}
                        <tr>
                            <td><strong>{res.name}</strong></td>
                            <td>{res.description}</td>
                            <td>
                                <a
                                    href={res.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button class="edit-btn"
                                        >{res.label ?? "OPEN"}</button
                                    >
                                </a>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
