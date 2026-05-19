<script lang="ts">
	import Icon from '$lib/assets/A.png';
	import Header from '$components/Header.svelte';
	import '../app.scss';
	import 'virtual:uno.css';
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import { setTheme, createThemeState } from '$lib/theme.svelte';

	let { children } = $props();

	const theme = createThemeState();
	setTheme(theme);

	onMount(() => {
		const lenis = new Lenis({
			autoRaf: true
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={Icon} />
	<meta
		name="description"
		content="Aspiring Software Engineer passionate about building scalable and efficient web applications. Skilled in TypeScript, SvelteKit, and modern web technologies. Committed to continuous learning and creating impactful digital solutions."
	/>
	<meta
		name="keywords"
		content="Aspiring Software Engineer, Software Engineer, Web Applications, TypeScript, SvelteKit, Modern Web Technologies, Digital Solutions, Abhijeet Dhikale, Portfolio, SvelteKit"
	/>
	<meta
		property="og:title"
		content="Abhijeet Dhikale | Portfolio"
	/>
	<meta
		property="og:description"
		content="Aspiring Software Engineer passionate about building scalable and efficient web applications. Skilled in TypeScript, SvelteKit, and modern web technologies. Committed to continuous learning and creating impactful digital solutions."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://abhijeetdhikale007.github.io" />
	<meta property="og:image" content="https://abhijeetdhikale007.github.io/A.png" />
	<meta
		property="og:description"
		content="Aspiring Software Engineer passionate about building scalable and efficient web applications. Skilled in TypeScript, SvelteKit, and modern web technologies. Committed to continuous learning and creating impactful digital solutions."
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Abhijeet Dhikale | Portfolio"
	/>
	<meta
		name="twitter:description"
		content="Aspiring Software Engineer passionate about building scalable and efficient web applications. Skilled in TypeScript, SvelteKit, and modern web technologies. Committed to continuous learning and creating impactful digital solutions."
	/>
	<meta name="twitter:image" content="https://abhijeetdhikale007.github.io/A.png" />
</svelte:head>

<Header />
{@render children()}
