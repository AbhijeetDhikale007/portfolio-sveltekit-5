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

<header class="static top-0 z-4" in:fly={{ y: -100, duration: 1000 }}>
	<div class="Header">
		<div class="ml-[4vw] lg:ml-[8vw] flex pointer-events-none z-1 items-center select-none">
			<!-- <img
                class="King pointer-events-none w-16 lg:w-17 inline-block"
                src="/King.png"
                alt="King - A Logo"
            /> -->
			<h3 class="mr-4 text-black bg-white px-4.8 rounded-3.8 text-8.5 font-bold">Λ</h3>
			<pre
				class="tracking-[-1px] inline-block vertical-middle text-white cursor-default font-size-4 lg:font-size-5 xl:text-5.4 2xl:text-5.6 font-Roboto">Λ ʙ ʜ ι נ є є τ   Ð ʜ ι κ α ℓ є</pre>
		</div>
		<nav>
			<div class="Menu-Container">
				<button class="Menu-Button w-10 h-10" onclick={() => MenuHandler()}
					><Ico class="invert" name="Menu" /></button
				>
				{#if isOpen == true}
					<div
						class="bg-black fixed flex top-14 left-0 justify-center w-screen h-screen backdrop-blur-[12px] animation-MenuAnimation ease-in-out 0.8s;"
					>
						<div class="Menu">
							<div class="Menu-Buttons-1">
								{#each MenuItems as item}
									<a class="Button-Black" href={item.href}>
										<Ico class="w-6 h-6" name={item.name} />
										<p>{item.name}</p>
									</a>
								{/each}
							</div>
							<div class="grid px-3 mt-3">
								<button class="Menu-Button ml-6 justify-self-end" onclick={() => (isOpen = false)}
									><Ico class="w-6 h-6 invert" name="Close" /></button
								>
							</div>
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
		// width: 85vw;
		// height: fit-content;
		background-color: rgb(0, 0, 0, 0.6);
		backdrop-filter: blur(3px);
		border-bottom: 0.5px solid rgb(255, 255, 255, 0.5);
		@apply flex flex-items-center flex-justify-between;
		@apply grow-1 h-14 w-[100vw];
	}

	nav {
		@apply flex justify-center flex-row pr-[2vw] lg:pr-[6vw];
		// border: 2px solid #fff;

		.Links {
			@apply flex gap-4;
		}

		.Menu-Container {
			.Menu-Wrapper {
				background-color: rgb(0, 0, 0);
				backdrop-filter: blur(12px);
				@apply fixed flex top-14 left-0 justify-center;
				@apply w-[100vw] h-[100vh];
				animation: MenuAnimation ease-in-out 0.8s;
			}

			.Menu {
				@apply w-[100vw];
			}

			@keyframes MenuAnimation {
				0% {
					top: -30vh;
				}

				100% {
					@apply top-14;
				}
			}
		}
	}

	.Menu-Button {
		@apply flex justify-center items-center border-none bg-white text-black rounded-1.8 p-1.8;

		img {
			filter: invert(1);
		}
	}

	.Menu-Button:hover {
		filter: invert(1);
	}
</style>
