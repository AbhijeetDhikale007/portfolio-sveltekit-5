<script lang="ts">
	import Ico from '$components/Ico.svelte';

	const icons = [
		'Angular',
		'Bootstrap',
		'CPlus',
		'CLang',
		'CSS',
		'Dart',
		'Firebase',
		'Flutter',
		'HTML',
		'Java',
		'JavaScript',
		'MySQL',
		'PHP'
	];

	// Duplicate icons array to create seamless loop
	const duplicatedIcons = [...icons, ...icons];
</script>

<div
	class="relative w-full overflow-hidden flex items-center h-20 md:h-32 bg-transparent before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[15vw] before:bg-gradient-to-r before:from-black/10 dark:before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[15vw] after:bg-gradient-to-l after:from-black/10 dark:after:from-black after:to-transparent"
>
	<div class="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap min-w-max">
		{#each duplicatedIcons as iconName, index}
			<div
				class="mx-4 md:mx-6 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-white/80 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl shadow-sm hover:-translate-y-2 transition-all group backdrop-blur-md"
			>
				<Ico
					class="w-8 h-8 md:w-12 md:h-12 group-hover:scale-110 transition-transform opacity-90 group-hover:opacity-100"
					name={iconName}
				/>
			</div>
		{/each}
	</div>
</div>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-50%);
		}
	}
	.animate-marquee {
		animation: marquee 30s linear infinite;
	}
</style>
