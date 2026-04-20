<script lang='ts'>
    import { fly } from 'svelte/transition'
    import { cubicIn } from 'svelte/easing'
    import Heading from '$components/Heading.svelte';
    import Card from '$components/EducationCard.svelte';
</script>

<div class='Education flex flex-col gap-y-10 items-center'  in:fly={{ easing: cubicIn, y: 100, duration: 1200 }}>
    <Heading HeadingTitle='Education' />
    <div class='relative flex mt-10 mb-20'>
        <div class='border-none border-l-1 border-l-black/20 dark:border-l-white/20 justify-self-center self-center w-0 h-100% absolute inset-0 ml-50% mr-50% hidden md:block lg:block xl:block 2xl:block z--1 shrink-1 grow-1'></div>
        <div class="w-[88vw] h-fit flex flex-col shrink-1 gap-y-20">
            <Card />
        </div>
    </div>
</div>