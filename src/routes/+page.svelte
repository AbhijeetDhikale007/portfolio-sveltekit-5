<script lang="ts">
    import { fly } from "svelte/transition";
    import Header from "$routes"
    import { Main } from "$store";
    
    import './app.scss'
</script>

<header in:fly={{y: -100, duration: 1000}}>
    <Header />
</header>
<main class='z-1'>
    <svelte:component this={$Main}></svelte:component>
</main>

<style lang='scss'>
    header {
        @apply fixed top-0 left-0 z-2;
    }

    main {
        @apply flex justify-center items-center min-h-[88vh] max-w-[98vw] w-[98vw] overflow-hidden;
    }
</style>