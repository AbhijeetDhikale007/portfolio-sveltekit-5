<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$components/Header.svelte';
	import '../app.scss';
	import 'virtual:uno.css';
	import { setTheme, createThemeState } from '$lib/theme.svelte';

	let { children } = $props();

	const theme = createThemeState();
	setTheme(theme);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children()}
