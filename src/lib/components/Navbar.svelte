<script lang="ts">
    import { page } from '$app/stores';
    import Icon from '@iconify/svelte';
</script>

<nav class="flex border border-black mb-5">
    <a href="/" class="px-5 py-2.5 no-underline font-bold text-sm border-r border-black hover:bg-[#ddd] { $page.url.pathname === '/' ? 'bg-black text-white' : 'bg-[#eee] text-black' }">OVERVIEW</a>
    <a href="/projects" class="px-5 py-2.5 no-underline font-bold text-sm border-r border-black hover:bg-[#ddd] { $page.url.pathname === '/projects' ? 'bg-black text-white' : 'bg-[#eee] text-black' }">PROJECTS</a>
    <a href="/team" class="px-5 py-2.5 no-underline font-bold text-sm border-r border-black hover:bg-[#ddd] { $page.url.pathname === '/team' ? 'bg-black text-white' : 'bg-[#eee] text-black' }">TEAM</a>
    <a href="/calendar" class="px-5 py-2.5 no-underline font-bold text-sm border-r border-black hover:bg-[#ddd] { $page.url.pathname === '/calendar' ? 'bg-black text-white' : 'bg-[#eee] text-black' }">CALENDAR</a>
    
    <a href="https://discord.gg/WfKAbJpZFX" target="_blank" rel="noopener noreferrer" class="ml-auto px-5 py-2.5 no-underline font-bold text-sm border-l border-black text-[#5865F2] hover:bg-[#ddd] bg-[#eee] flex items-center gap-1.5"><Icon icon="mdi:discord" class="text-lg" /> DISCORD / JOIN</a>
</nav>
