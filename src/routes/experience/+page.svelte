<script lang='ts'>
    import { fly } from 'svelte/transition'
    import { cubicIn } from 'svelte/easing'
    import Heading from '$components/Heading.svelte';
    import Card from '$components/ExperienceCard.svelte';
</script>

<div class='relative flex flex-col mt-5' in:fly={{ easing: cubicIn, y: 100, duration: 1200 }}>
    <Heading HeadingTitle='Experience' />
    <div class='relative flex mt-10 mb-20'>
        <div
            class='border-1 border-white/20 absolute left-1/2 -translate-x-1/2 top-0 bottom-0 h-full hidden md:block z-[-1]'
        ></div>
        <div class='w-[88vw] mx-auto h-fit flex flex-col shrink-1 gap-y-20'>
            <Card />
        </div>
    </div>
</div>