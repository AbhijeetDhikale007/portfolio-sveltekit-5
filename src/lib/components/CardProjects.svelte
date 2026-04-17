<script lang="ts">
	import { Project } from '$data/Projects';
	import Ico from '$components/Ico.svelte';
	import VanillaTilt from 'vanilla-tilt';

	function tilt(node: HTMLElement) {
		VanillaTilt.init(node, {
			max: 8,
			speed: 80,
			glare: true,
			'max-glare': 0.1,
			gyroscope: true,
			gyroscopeMinAngleX: -18,
			gyroscopeMaxAngleX: 18,
			gyroscopeMinAngleY: -18,
			gyroscopeMaxAngleY: 18
		});

		return {
			destroy() {
				if ((node as any).vanillaTilt) {
					(node as any).vanillaTilt.destroy();
				}
			}
		};
	}
</script>

{#each Project as project}
	<div
		class="border-1 border-black/40 hover:border-black dark:border-white/40 dark:hover:border-white w-full max-w-[400px] lg:w-[30vw] xl:w-[26vw] bg-transparent flex flex-wrap flex-col gap-y-3 rounded-xl p-6 transition-colors"
		use:tilt
	>
		<div class="w-full">
			<Ico class="w-15 h-15" name={project.Logo} />
		</div>
		<div class="flex justify-between items-center w-full">
			<h2 class="text-2xl font-semibold">{project.Title}</h2>
			<div class="flex items-center gap-x-2">
				<a
					class="Tooltip w-8 h-8 p-1.2 flex content-center border-1 border-black/40 hover:border-black dark:border-white/40 dark:hover:border-black rounded-2 transition-all bg-black hover:bg-black hover:invert dark:bg-black dark:invert dark:hover:invert-0"
					data-title="GitHub"
					href={project.urlGit}
					target="_blank"
				>
					<Ico name="GitHubW" />
				</a>
				<a
					class="Tooltip w-8 h-8 p-1.2 flex content-center border-1 border-white/40 hover:border-black dark:hover:border-black rounded-2 transition-all bg-black hover:bg-black hover:invert dark:bg-black dark:invert dark:hover:invert-0"
					data-title="Deployment"
					href={project.urlDeploy}
					target="_blank"
				>
					<Ico name="Link" />
				</a>
			</div>
		</div>
		<hr />
		<div class="flex gap-3 items-center w-full font-medium text-sm">
			<Ico name="Project" class="h-6 w-6" />
			<h4>{project.Type}</h4>
		</div>
		<hr />
		<div class="flex gap-3 items-center w-full font-medium text-sm">
			<Ico name="Time" class="h-6 w-6" />
			<h4>{project.Duration}</h4>
		</div>
		<hr />
		<div class="flex flex-grow flex-shrink py-2 min-h-[14vh]">
			<h4 class="text-sm leading-relaxed text-justify m-0 opacity-80 font-light">
				{project.Details}
			</h4>
		</div>
		<div class="flex justify-between items-center w-full text-xs font-semibold">
			<div class="px-3 py-2 border-1 border-white/20 rounded-full"><p>{project.From}</p></div>
			<div class="px-3 py-2 border-1 border-white/20 rounded-full"><p>{project.To}</p></div>
		</div>
		<hr />
		<div class="flex gap-x-2 items-center justify-start h-[6vh] w-full mt-auto">
			{#each [project.SVG1, project.SVG2, project.SVG3, project.SVG4, project.SVG5, project.SVG6, project.SVG7, project.SVG8, project.SVG9, project.SVG10].filter( (svg): svg is string => Boolean(svg) ) as svg}
				<div class="Tooltip" data-title={svg}>
					<Ico class="border-1 border-white/40 w-8 h-8 p-1.6 rounded-2" name={svg} />
				</div>
			{/each}
		</div>
	</div>
{/each}

<style lang="scss">
	hr {
		border: none;
		border-bottom: 0.4px solid rgba(100, 100, 100, 0.5);
		margin: 0;
	}
</style>
