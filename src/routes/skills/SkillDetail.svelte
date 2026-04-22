<script lang='ts'>
    import { fly } from 'svelte/transition'
    import { cubicIn } from 'svelte/easing'
    import Ico from '$components/Ico.svelte'
    import type { SkillData } from '$data/Skills'

    let { skill, onBack }: { skill: SkillData, onBack: () => void } = $props();

    // Split info by double newlines for paragraph spacing
    let paragraphs = $derived(skill.info.split('\n\n'));
</script>

<div class="SkillDetail flex flex-col items-center w-full max-w-[90vw] md:max-w-[80vw] mx-auto mt-10 mb-20" in:fly={{ easing: cubicIn, y: 100, duration: 800 }}>
    
    <!-- Top Hero Section -->
    <div class="HeroSection flex items-center justify-between w-full min-h-[20vh] mb-10">
        <h1 class="text-white text-5xl md:text-7xl font-bold tracking-wider uppercase">{skill.name}</h1>
        <div class="IconWrapper opacity-50 scale-150 transform origin-right">
            <Ico class="{skill.class} w-32 h-32 md:w-48 md:h-48" name={skill.SVG} />
        </div>
    </div>

    <hr class="w-full border-t border-white/20 mb-10" />

    <!-- Description Section -->
    <div class="Description text-white/80 text-sm md:text-base leading-relaxed tracking-wide text-justify w-full">
        {#each paragraphs as paragraph}
            <p class="mb-6">{paragraph}</p>
        {/each}
    </div>

    <hr class="w-full border-t border-white/20 mt-4 mb-10" />

    <!-- Bottom Actions -->
    <div class="Actions w-full flex justify-between items-center">
        <!-- External Link -->
        {#if skill.url}
            <a href={skill.url} target="_blank" rel="noopener noreferrer" class="bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors shadow-lg">
                {skill.name}
            </a>
        {:else}
            <div></div>
        {/if}

        <!-- Back Button -->
        <button onclick={onBack} class="bg-white text-black p-3 rounded-lg hover:bg-white/90 transition-transform hover:-translate-x-1 shadow-lg flex items-center justify-center" aria-label="Go Back">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                <path d="M9 14 4 9l5-5"/>
                <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/>
            </svg>
        </button>
    </div>
</div>

<style lang="scss">
    .HeroSection {
        .IconWrapper {
            :global(.SVG) {
                filter: drop-shadow(0 0 20px rgba(255,255,255,0.2));
            }
        }
    }
</style>
