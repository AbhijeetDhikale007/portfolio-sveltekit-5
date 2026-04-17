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
	<div class="CardProject" use:tilt>
		<div class="CP0">
			<Ico class="w-15 h-15" name={project.Logo} />
		</div>
		<div class="CP1">
			<h2>{project.Title}</h2>
			<div class="CP1Div">
				<a
					class="Tooltip w-5 h-5 flex content-center"
					data-title="GitHub"
					href={project.urlGit}
					target="_blank"
				>
					<Ico class="h-6 w-6" name="GitHubW" />
				</a>
				<a
					class="Tooltip w-5 h-5 flex content-center"
					data-title="Deployment"
					href={project.urlDeploy}
					target="_blank"
				>
					<Ico class="h-6 w-6" name="Link" />
				</a>
			</div>
		</div>
		<hr />
		<div class="CP2">
			<Ico name="Project" class="h-6 w-6" />
			<h4>{project.Type}</h4>
		</div>
		<hr />
		<div class="CP3">
			<Ico name="Time" class="h-6 w-6" />
			<h4>{project.Duration}</h4>
		</div>
		<hr />
		<div class="CP4">
			<h4 class="font-light">{project.Details}</h4>
		</div>
		<div class="CP5">
			<div><p>{project.From}</p></div>
			<div><p>{project.To}</p></div>
		</div>
		<hr />
		<div class="flex gap-x-2 items-center justify-start h-[10vh] w-100%;">
			{#each [project.SVG1, project.SVG2, project.SVG3, project.SVG4, project.SVG5, project.SVG6, project.SVG7, project.SVG8, project.SVG9, project.SVG10].filter( (svg): svg is string => Boolean(svg) ) as svg}
				<div class="Tooltip" data-title={svg}>
					<Ico class="border-1 border-white w-5 h-5 p-1.6 rounded-3 h-6 w-6" name={svg} />
				</div>
			{/each}
		</div>
	</div>
{/each}

<style lang="scss">
	.CardProject {
		border: 0.6px solid rgba(100, 100, 100, 0.3);
		@apply bg-transparent flex flex-wrap flex-col gap-y-3 rounded-xl p-6 transition-colors;
		
		width: 100%;
		max-width: 400px;
		@apply lg:w-[30vw] xl:w-[26vw];

		&:hover {
			border-color: rgba(100, 100, 100, 0.8);
		}
	}

	hr {
		border: none;
		border-bottom: 0.4px solid rgba(100, 100, 100, 0.3);
		margin: 0;
	}

	.CP0 {
		@apply w-full;
	}

	.CP1 {
		@apply flex justify-between items-center w-full;

		h2 {
			@apply text-2xl font-bold;
		}

		.CP1Div {
			@apply flex items-center gap-x-2;

			a {
				border: 0.4px solid rgba(100, 100, 100, 0.5);
				@apply flex rounded items-center p-1.5 transition-all hover:bg-black/10 dark:hover:bg-white/10;
			}
		}
	}

	.CP2, .CP3 {
		@apply flex gap-3 items-center w-full font-medium text-sm;
		
		h4 {
			@apply m-0;
		}
	}

	.CP4 {
		@apply py-2 min-h-[14vh];

		h4 {
			@apply text-sm leading-relaxed text-justify m-0 opacity-80 font-light;
		}
	}

	.CP5 {
		@apply flex justify-between items-center w-full;

		div {
			border: 0.5px solid rgba(100, 100, 100, 0.5);
			@apply py-[2px] px-3 rounded-full text-xs font-semibold;
			
			p { @apply m-0; }
		}
	}

	.CP6 {
		@apply flex gap-x-2 items-center justify-start h-[6vh] w-full mt-auto;
	}
</style>
