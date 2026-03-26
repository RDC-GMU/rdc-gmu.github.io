<script lang="ts">
	import "./layout.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<title>Raytheon Drone Club (RDC) | GMU</title>
	<meta
		name="description"
		content="Official website for the Raytheon Drone Club (RDC) team at George Mason University. Developing collaborative autonomous UAV and UGV systems for GPS-denied environments."
	/>
	<meta
		name="keywords"
		content="Raytheon, Drone, Club, RDC, GMU, George Mason University, UAV, UGV, Autonomous Vehicles, Robotics"
	/>
	<meta property="og:title" content="Raytheon Drone Club (RDC) | GMU" />
	<meta
		property="og:description"
		content="Official website for the Raytheon Drone Club (RDC) team at George Mason University."
	/>
	<meta property="og:image" content="/logo.png" />
	<meta property="og:url" content="https://rdc-gmu.github.io/" />
	<meta name="twitter:card" content="summary" />
	<link rel="icon" href="/logo.png" />
</svelte:head>

<div
	class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-[15px] mb-[20px]"
>
	<div class="flex items-center gap-[15px]">
		<img
			src="/logo.png"
			alt="RDC Logo"
			class="h-10 md:h-12 rounded-md w-auto object-contain"
		/>
		<h1 class="m-0 text-xl md:text-2xl font-bold leading-tight">
			RAYTHEON DRONE CLUB <span
				class="text-[14px] md:text-[18px] text-[#555] font-normal block sm:inline mt-1 sm:mt-0"
				>(RDC)</span
			>
		</h1>
	</div>
	<div
		class="md:ml-auto w-full md:w-auto text-left md:text-right border-t border-gray-300 md:border-none pt-2 md:pt-0"
	>
		<div class="text-[16px] md:text-[18px] font-bold">GMU</div>
	</div>
</div>

<Navbar />

{@render children()}

<Footer />
