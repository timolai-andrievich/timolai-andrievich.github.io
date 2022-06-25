<script lang="ts">
    export let logo;
    export let link;
</script>

<a href={link} target="_blank">
    <img src={logo} alt="Logo"/>
</a>

<style>
    img {
        height: 60px;
        margin: 2px;
        transition: 250ms;
    }
    img:hover {
        height: 64px;
        margin: 0px;
    }
    a {
        margin-right: 20px;
    }
</style>