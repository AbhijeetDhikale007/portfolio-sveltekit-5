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
</svelte:head>

<Header />
{@render children()}
