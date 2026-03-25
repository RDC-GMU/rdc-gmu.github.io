<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Raytheon Drone Competition</title>
	<link rel="icon" href="/logo.png" />
</svelte:head>

<div class="flex items-center gap-[15px] mb-[20px]">
	<img src="/logo.png" alt="RDC Logo" class="h-12 rounded-md w-auto object-contain" />
	<h1 class="m-0 text-2xl font-bold">RAYTHEON DRONE COMPETITION <span class="text-[18px] text-[#555] font-normal">(RDC)</span></h1>
	<div class="ml-auto text-right">
		<div class="text-[18px] font-bold">GMU</div>
	</div>
</div>

<Navbar />

{@render children()}

<Footer />
