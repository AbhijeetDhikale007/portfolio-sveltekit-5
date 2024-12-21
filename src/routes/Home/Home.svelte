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
        @apply flex flex-col items-center justify-center px-5;
        @apply md:flex-row md:justify-evenly;
        @apply lg:flex-row lg:justify-evenly;
        @apply xl:flex-row xl:justify-evenly;
        @apply 2xl:flex-row 2xl:justify-evenly;
        @apply w-[100vw] h-[100vh] pointer-events-none;

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