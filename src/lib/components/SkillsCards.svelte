<script lang='ts'>
    import VanillaTilt from "vanilla-tilt"
    import Ico from '$components/Ico.svelte'
    import type { SkillData } from '$data/Skills'

    let { skill }: { skill: SkillData } = $props();

    function tilt(node: HTMLElement) {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        
        VanillaTilt.init(node, {
            max: isMobile ? 5 : 25,
            perspective: isMobile ? 80 : 280,
            scale: isMobile ? 1.0 : 1.08,
            speed: isMobile ? 80 : 400,
            glare: true,
            "max-glare": isMobile ? 0.1 : 0.4,
            gyroscope: true,
            gyroscopeMinAngleX: -40,
            gyroscopeMaxAngleX: 40,
            gyroscopeMinAngleY: -40,
            gyroscopeMaxAngleY: 40,
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

<a href="/skills/{skill.slug}" class='Card border-none no-underline rounded-5 bg-black hover:z-1 dark:bg-white flex grow-1 shrink-1 items-center justify-between overflow-hidden h-19 min-h-14 max-h-22 min-w-[72vw] w-[76vw] max-w-[84vw] md:max-h-22 md:h-19 md:min-h-16 md:max-w-[42vw] md:min-w-[33vw] md:w-[36vw] lg:min-w-68 lg:max-w-80 lg:w-76 lg:min-h-18 lg:max-h-19 xl:w-[24vw] xl:min-w-[22vw] xl:max-w-[24vw] 2xl:w-88 2xl:min-w-86 2xl:max-w-90 2xl:h-24 2xl:min-h-22' use:tilt>
    <p class='px-6 text-white dark:text-black'>{skill.name}</p>
    <Ico class='{skill.class} w-fit' name={skill.SVG} />
</a>

<style lang='scss'>
    .Card {
        box-shadow: inset 3px 3px 10px rgb(255, 255, 255, .1),
                    inset -3px -3px 10px rgb(255, 255, 255, .1);
    }
</style>
