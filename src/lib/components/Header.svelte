<script lang="ts">
	import { fly } from 'svelte/transition';
	import Ico from '$components/Ico.svelte';

	const MenuItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Skills', href: '/skills' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Experience', href: '/experience' },
		{ name: 'Education', href: '/education' },
		{ name: 'Resume', href: '/resume' }
	];

	let isOpen: boolean = false;

	function MenuHandler() {
		if (isOpen == false) {
			isOpen = true;
		} else {
			isOpen = false;
		}
	}
</script>

<header class="fixed top-0 left-0 w-full z-50 px-[4vw] lg:px-[8vw]" in:fly={{ y: -100, duration: 1000 }}>
	<div class="Header">
		<a href="/" class="flex items-center gap-4 no-underline group">
			<div class="flex items-center justify-center bg-white text-black w-10 h-10 lg:w-12 lg:h-12 rounded-xl text-2xl lg:text-3xl font-bold transition-transform group-hover:scale-105 active:scale-95">
				Λ
			</div>
			<span class="tracking-[-0.5px] text-white font-Roboto text-lg lg:text-xl xl:text-2xl font-medium opacity-90 transition-opacity group-hover:opacity-100">
				Λʙʜιנєєτ Ðʜικαℓє
			</span>
		</a>
		<nav>
			<div class="Menu-Container">
				<button class="Menu-Button w-10 h-10" onclick={() => MenuHandler()}
					><Ico class="invert" name="Menu" /></button
				>
				{#if isOpen}
					<div
						class="fixed inset-0 top-14 bg-black/80 backdrop-blur-xl z-50 flex flex-col items-center justify-start pt-10"
						transition:fly={{ y: -20, duration: 400 }}
					>
						<div class="Menu w-full max-w-sm px-6">
							<div class="flex flex-col gap-4">
								{#each MenuItems as item}
									<a 
										class="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 no-underline text-white" 
										href={item.href}
										onclick={() => isOpen = false}
									>
										<Ico class="w-6 h-6 opacity-70" name={item.name} />
										<span class="text-xl font-medium">{item.name}</span>
									</a>
								{#each item.name === 'Resume' ? [] : [] as _}<!-- placeholder for potential additions -->{/each}
								{/each}
							</div>
							
							<button 
								class="mt-10 mx-auto w-14 h-14 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 active:scale-90 transition-transform shadow-xl" 
								onclick={() => (isOpen = false)}
							>
								<Ico class="w-6 h-6" name="Close" />
							</button>
						</div>
					</div>
				{/if}
			</div>
			<div class="Menu-Buttons-2">
				{#each MenuItems as item}
					<a class="Button" href={item.href}>{item.name}</a>
				{/each}
			</div>
		</nav>
	</div>
</header>

<style lang="scss">
	.Header {
		@apply flex items-center justify-between w-full h-16 lg:h-20;
		background-color: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	nav {
		@apply flex items-center;

		.Menu-Container {
			@apply lg:hidden;
		}

		.Menu-Buttons-2 {
			@apply hidden lg:flex items-center gap-2;
		}
	}

	.Button {
		@apply px-4 py-2 rounded-full text-sm font-medium transition-all duration-300;
		@apply text-white/70 hover:text-white hover:bg-white/10;
		
		&[href="/resume"] {
			@apply bg-white text-black hover:bg-white/90 ml-2;
		}
	}

	.Menu-Button {
		@apply flex justify-center items-center w-10 h-10 border-none bg-white/10 text-white rounded-xl transition-all hover:bg-white hover:text-black;
	}

	.Menu-Button:hover {
		filter: invert(1);
	}
</style>
