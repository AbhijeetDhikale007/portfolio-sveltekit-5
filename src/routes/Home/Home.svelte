<script lang="ts">
    import { Typewriter } from '$lib/index.js';
    import { fly } from 'svelte/transition'
    import Icons from './Icons.svelte'
    import Profile from './Profile.svelte';
</script>

<div class="Home" in:fly={{y: 100, duration: 1000}}>
    <div>
        <h1>Hi,</h1>
        <h1>I'm Abhijeet Dhikale</h1>
        <Typewriter />
        <div class='Buttons-Container'>
            <Icons />
        </div>
    </div>
    <!-- <div class='SVG'> -->
        <Profile />
        <!-- <div>{@html HTMLIcon}</div>
        <div>{@html CSS}</div> -->
    <!-- </div> -->
    <div class='Status'>
        <h4>Under Development</h4>
    </div>
</div>

<style lang="scss">
    .Home {
        // border: 2px solid #fff;
        @apply flex md:flex flex-col items-center justify-center px-5;
        @apply lg:flex-row lg:justify-between xl:flex-row xl:justify-between 2xl:flex-row 2xl:justify-between;
        @apply w-[74vw] h-[100vh] md:w-[58vw] lg:w-[60vw] pointer-events-none;

        h1 {
            @apply text-10 md:text-12 lg:text-16 font-bold;
            // background-image: url('Background.jpg');
            // background: cover;
            // -webkit-text-fill-color: transparent;
            // -webkit-background-clip: text;
            // background-clip: text;
        }

        // .SVG {
        //     @apply flex w-27 h-27;
        // }

        .Buttons-Container {
            @apply flex gap-2 py-8 items-center select-none;
        }
    }

    .Status {
        @apply absolute bottom-2 left-4;
    }
</style>