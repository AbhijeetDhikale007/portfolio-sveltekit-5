<script lang='ts'>
    import { fly } from 'svelte/transition'
    import { cubicIn } from 'svelte/easing'
    import Heading from '$components/Header.svelte';
    import Card from '$components/ExperienceCard.svelte';
</script>

<div class='Experience' in:fly={{ easing: cubicIn, y: 100, duration: 1200 }}>
    <Heading HeadingTitle='Experience' />
    <div class='EduDivWrap'>
        <div class='HR'></div>
        <div class="EduDiv">
            <Card />
        </div>
    </div>
</div>

<style lang='scss'>
    .Experience {
        .EduDivWrap {
            @apply relative flex mt-10 mb-20;
        }

        .EduDiv {
            @apply w-[88vw] mx-auto h-fit;
            @apply flex flex-col shrink-1 gap-y-20;
        }

        .HR {
            border-left: 1px solid rgba(255, 255, 255, 0.2);
            @apply absolute left-1/2 -translate-x-1/2 top-0 bottom-0 h-full hidden md:block z-[-1];
        }
    }
</style>