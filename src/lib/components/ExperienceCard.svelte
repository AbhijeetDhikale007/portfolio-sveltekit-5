<script lang="ts">
    import VanillaTilt from "vanilla-tilt";
    import { Experience } from '$data/Experience'
    import Ico from '$components/Ico.svelte'

    function tilt(node: HTMLElement, options: any) {
        VanillaTilt.init(node, options);
        return {
            destroy() {
                if ((node as any).vanillaTilt) {
                    (node as any).vanillaTilt.destroy();
                }
            }
        };
    }
</script>

{#each Experience as card}
<div class="{card.CardClass.replace('CardEdu', '').trim()} CardEdu" use:tilt={{ max: 15, speed: 400, glare: true, "max-glare": 0.2 }}>
    <img class='Logo' src={card.imgUrl} alt={card.imgAlt} />
    <h2>{card.Title}</h2>
    <h3 class="pb-2">{card.Company}</h3>
    <hr />
    <div class="CardDiv">
        <div class="IconDiv"><Ico name='Location' /></div>
        <h4>{card.Location}</h4>
    </div>
    <hr />
    <div class="CardDiv">
        <div class="IconDiv"><Ico name="Date" /></div>
        <h4>{card.Date}</h4>
    </div>
    <hr />
    <div class="CardDiv">
        <div class="IconDiv"><Ico name='Time' /></div>
        <h4>{card.Duration}</h4>
    </div>
    <hr />
    <div class="CardDiv px-3 text-justify">
        <p class='font-4'>{card.Details}</p>
    </div>
    <hr />
    <div class="LastDiv">
        <a class="ButtonCard Tooltip" href={card.CertificateUrl} data-title='Certificate' target='_blank'><Ico name='Certificate' /></a>
    </div>
</div>
{/each}

<style lang="scss">
    .CardEdu {
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        @apply h-auto w-[80vw] md:w-[38vw] lg:w-[38vw] px-4 py-4 lg:px-6 lg:py-6 bg-[#0a0a0a] bg-opacity-70 backdrop-blur-md border border-white/10;
        transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

        &:hover {
            background: rgba(255, 255, 255, 0.03);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .CardDiv {
            @apply flex shrink-0 py-2 lg:py-3 items-center;
        }

        .IconDiv {
            @apply w-5 h-5 pr-3 text-white/70 flex items-center justify-center;
        }

        .Logo {
            @apply w-20 h-20 object-contain mb-4 bg-white/5 rounded-lg p-2;
        }

        h2 {
            @apply text-xl font-bold text-white mb-1;
        }

        h3 {
            @apply text-lg text-white/80 font-medium;
        }

        h4 {
            @apply text-sm text-white/70 font-medium m-0;
        }

        p {
            @apply text-sm text-white/60 leading-relaxed;
        }

        hr {
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            @apply my-2;
        }
    }

    .Card1 {
        @apply self-center md:self-start lg:self-start;
    }

    .Card2 {
        @apply self-center md:self-end lg:self-end;
    }

    .LastDiv {
        @apply flex pt-4 justify-end;
    }

    .ButtonCard {
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        fill: #fff;
        transition: all 0.3s ease;
        text-decoration: none;
        cursor: pointer;
        @apply w-10 h-10 flex items-center justify-center bg-white/5;

        &:hover {
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 10px rgba(255,255,255,0.2);
            transform: translateY(-2px);
        }

        &:active {
            background-color: #fff;
            fill: #000;
            transform: translateY(0);
        }
    }
</style>