<script lang="ts">
	import IP from '$lib/IP.svelte';
</script>

<header>
	<nav>
		<div class="nav-link-container">
			<a href="/" class="nav-link">Main page</a>
		</div>
		<div class="nav-link-container">
			<a href="projects" class="nav-link">Projects</a>
		</div>
	</nav>
</header>
<slot />

<footer>
	&copy; 2022
	<IP />
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		flex-direction: column;
		font-size: 9px;
	}
	:root {
		margin-top: 7%;
		margin-left: 10%;
		margin-right: 10%;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}
	nav {
		text-align: center;
		display: flex;
		justify-content: space-evenly;
	}
	.nav-link-container {
		flex: 1;
	}
	.nav-link {
		color: black;
		text-decoration: none;
		font-size: 32px;
	}
	a {
		border-bottom: 2px solid transparent;
		text-decoration: none;
		transition: 0.4s;
	}
	a:visited,
	a:link,
	a:active {
		color: inherit;
	}
	a:hover {
		border-bottom: 2px solid black;
	}
</style>
