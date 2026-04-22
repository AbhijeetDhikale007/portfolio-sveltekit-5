<script lang="ts">
    import SkillDetail from '../SkillDetail.svelte';
    import { goto } from '$app/navigation';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

    function goBack() {
        goto('/skills');
    }
</script>

<svelte:head>
    <title>{data.skill.name} - Skills</title>
</svelte:head>

<SkillDetail skill={data.skill} onBack={goBack} />
