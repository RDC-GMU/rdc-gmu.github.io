<script lang="ts">
    interface TeamMember {
        name: string;
        role: string;
        contact?: string;
    }

    let { title, members }: { title: string; members: TeamMember[] } = $props();

    let hasContact = $derived(members.some((m) => m.contact));
</script>

<div class="config-category">
    <h2 style="margin-bottom: 15px;">{title}</h2>
    <div class="tables-container mb-5">
        <div class="table-wrapper">
            <table class="config-table mt-0">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>ROLE</th>
                        {#if hasContact}
                            <th>CONTACT</th>
                        {/if}
                    </tr>
                </thead>
                <tbody>
                    {#each members as member}
                        <tr>
                            <td><strong>{member.name}</strong></td>
                            <td>{member.role}</td>
                            {#if hasContact}
                                <td>
                                    {#if member.contact}
                                        <a href="mailto:{member.contact}"
                                            >{member.contact}</a
                                        >
                                    {/if}
                                </td>
                            {/if}
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
