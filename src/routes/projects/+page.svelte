<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import Heading from '$components/Heading.svelte';
	import CardProject from '$components/CardProjects.svelte';
</script>

<svelte:head>
	<title>Projects - Abhijeet Dhikale</title>
</svelte:head>

<div
	class="flex flex-col items-center w-[100vw] min-h-[90vh] py-10"
	in:fly={{ easing: cubicIn, x: 100, duration: 1200 }}
>
	<Heading HeadingTitle="Projects" />

	<div class="flex flex-wrap justify-center gap-8 md:gap-12 w-full max-w-[1400px] px-6 mt-8">
		<CardProject />
	</div>
</div>
