<script lang="ts">
    import Project from "./Project.svelte";
    export let projects;
</script>

{#each projects as [header, description]}
    <Project header={header} description={description} />
{/each}