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

	let isOpen = $state(false);

	function MenuHandler() {
		isOpen = !isOpen;
	}
</script>

<header
	class="static flex justify-center top-0 left-0 w-[100vw] z-4 border-b-[0.1px] border-white/45"
	in:fly={{ y: -100, duration: 1000 }}
>
	<div
		class="Header flex items-center justify-between w-[87vw] h-10 lg:h-15 bg-black/40 backdrop-blur-[12px]"
	>
		<a
			href="/"
			class="flex items-center gap-4 no-underline group rounded-xl border-[0.1px] border-white/35 overflow-hidden"
		>
			<div
				class="flex items-center justify-center bg-white text-black w-10 h-10 lg:w-12 lg:h-12 text-2xl lg:text-3xl font-bold transition-transform group-hover:scale-105 active:scale-95 select-none"
			>
				Λ
			</div>
			<span
				class="tracking-[2px] mr-4 text-white font-Roboto-Condensed text-lg lg:text-xl xl:text-xl transition-opacity group-hover:opacity-100 select-none"
			>
				Λʙʜιנєєτ Ðʜικαℓє
			</span>
		</a>
		<nav class="flex items-center">
			<div class="lg:hidden">
				<button
					class="flex justify-center items-center w-10 h-10 border-none bg-white text-black rounded-xl transition-all hover:invert hover:text-black"
					onclick={() => MenuHandler()}><Ico class="invert" name="Menu" /></button
				>
				{#if isOpen}
					<div
						class="fixed inset-0 top-14 bg-black/80 backdrop-blur-xl z-50 flex flex-col items-center justify-start pt-10"
						transition:fly={{ y: -20, duration: 400 }}
					>
						<div class="bg-black z-10 w-[100vw]">
							<div class="flex flex-col gap-4 w-[90vw] mx-auto">
								{#each MenuItems as item}
									<a
										class="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 no-underline text-white"
										href={item.href}
										onclick={() => (isOpen = false)}
									>
										<Ico class="w-6 h-6 opacity-70" name={item.name} />
										<span class="text-xl font-medium">{item.name}</span>
									</a>
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
			<div class="hidden lg:flex items-center gap-2">
				{#each MenuItems as item}
					<a
						class="px-4 py-2 rounded-2 text-3.6 font-medium transition-all ease-in-out duration-[500ms] text-white hover:text-black hover:bg-white select-none"
						href={item.href}>{item.name}</a
					>
				{/each}
			</div>
		</nav>
	</div>
</header>
