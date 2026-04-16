<script lang="ts">
	import HomeIcons from '$components/HomeIcons.svelte';
	import Typewriter from '$components/Typewriter.svelte';
	import Carousel from '$components/Carousel.svelte';
</script>

<div class="flex flex-col items-center justify-center min-h-[90vh] w-full pt-26 overflow-x-hidden">
	<div class="flex flex-col items-center justify-center flex-grow w-full px-4 text-center z-10">
		<h1
			class="text-5xl md:text-7xl lg:text-8xl font-bold font-Roboto-Condensed mb-4 md:mb-6 text-black dark:text-white transition-colors duration-500 tracking-tighter"
		>
			Hi, I'm Abhijeet.
		</h1>

		<Typewriter
			phrases={['Full Stack Developer', 'Svelte Enthusiast', 'Tech Enthusiast', 'Coder...']}
		/>

		<div
			class="mt-10 md:mt-8 backdrop-blur-md bg-white/50 dark:bg-black/40 p-4 md:p-5 rounded-3xl border border-black/10 dark:border-white/10 shadow-2xl dark:shadow-white/25 transition-colors duration-500"
		>
			<HomeIcons />
		</div>
	</div>

	<div class="w-full mt-2">
		<p
			class="text-center text-xs md:text-sm mb-4 md:mb-4 opacity-60 font-semibold tracking-[0.3em] uppercase text-black dark:text-white transition-colors duration-500"
		>
			My Tech Stack
		</p>
		<Carousel />
	</div>
</div>
