<script lang='ts'>
    import { PageSkill } from '$store'
    import Skills from './Skills.svelte'

    $PageSkill = Skills
</script>

<svelte:component this={$PageSkill}>
</svelte:component>