<script lang="ts">
    import VanillaTilt from "vanilla-tilt";
    import { onMount } from "svelte";
    import { Education } from '$data/Education'
    import Ico from '$components/Ico.svelte'

    let TiltCard: HTMLElement[] = [];

    onMount(() => {
    TiltCard.forEach((card: HTMLElement) => {
      VanillaTilt.init(card, {
        max: 18, // Maximum tilt angle in degrees
        speed: 400, // Speed of the effect
        glare: true, // Enables glare effect
        "max-glare": 0.5, // Maximum opacity for glare
      });
    });
  });
</script>

{#each Education as card, index}
<div class="CardEdu rounded-5 h-auto w-[80vw] md:w-[38vw] lg:w-[38vw] px-4 py-2 lg:px-6 lg:py-4 bg-white dark:bg-black border-1 border-black/10 dark:border-white/10
 {index % 2 === 0 ? 'md:self-start lg:self-start' : 'md:self-end lg:self-end'}" bind:this={TiltCard[index]}>
    <div class='w-20 h-20 mb-3 p-1 bg-black/20 dark:bg-white/80 rounded-4'>
        <img src={card.imgUrl} alt={card.imgAlt} />
    </div>
    <h2 class='text-black dark:text-white'>{card.Degree}</h2>
    <h3 class="text-black dark:text-white pb-2">{card.Name}</h3>
    <hr class='dark:invert' />
    <div class="CardDiv">
        <div class="IconDiv w-6 h-6 pr-2 text-white invert dark:invert-0"><Ico name='Location' /></div>
        <h4 class='text-/80 dark:text-white/80'>{card.Location}</h4>
    </div>
    <hr class='dark:invert' />
    <div class="CardDiv">
        <div class="IconDiv w-6 h-6 pr-2 text-white invert dark:invert-0"><Ico name="Date" /></div>
        <h4 class='text-black/80 dark:text-white/80'>{card.Date}</h4>
    </div>
    <hr class='dark:invert' />
    <div class="CardDiv">
        <div class="IconDiv w-6 h-6 pr-2 text-white invert dark:invert-0"><Ico name='Time' /></div>
        <h4 class='text-black/80 dark:text-white/80'>{card.Duration}</h4>
    </div>
    <hr class='dark:invert' />
    <div class="flex pt-4 justify-end">
        <a class="invert rounded-3 transition-colors duration-300 no-underline cursor-pointer w-5 h-5 px-3 py-1.5 Tooltip" href={card.CertificateUrl} data-title='Certificate' target='_blank'><Ico name='Certificate' /></a>
    </div>
</div>
{/each}

<style lang="scss">
    .CardEdu {
        box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.1), 0 2px 4px 0px rgba(0, 0, 0, 0.06);
        @apply dark:shadow-[0_2px_6px_0px_rgba(255,255,255,0.2),0_2px_6px_0px_rgba(255,255,255,0.06)];

        .CardDiv {
            @apply flex shrink-1 py-2 lg:py-3 items-center;
        }

        hr {
            @apply border-none border-b-[.2px] border-black/20 border-b-solid;
        }
    }
</style>