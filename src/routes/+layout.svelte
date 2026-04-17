<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
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
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children()}
