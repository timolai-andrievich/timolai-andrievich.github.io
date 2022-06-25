<script lang="ts">
	import About from "./About.svelte";
	import Footer from "./Footer.svelte";
	import Projects from "./Projects.svelte";
	import Socials from "./Socials.svelte";
	const projects = [
		[
			'eo-strings',
			'A library for the string-related operations for the EO programming language.',
		]
	]
	const socials = [
		[
			'https://github.com/timolai-andrievich',
			'./assets/logos/github-logo.svg',
		],
		[
			'https://t.me/liveworldlike',
			'./assets/logos/telegram-logo.svg',
		],
		[
			'mailto:timolai.andrievitch@ya.ru',
			'./assets/logos/email-icon.svg',
		],
		[
			'https://codeforces.com/profile/timolai.andrievitch',
			'./assets/logos/codeforces-logo.svg',
		],
	]
</script>

<main>
	<About />
	<Projects projects={projects} />
	{#each socials as [link, logo]}
		<Socials logo={logo} link={link} />
	{/each}
	<Footer />
</main>

<style>
	main {
		margin-top: 20vh;
		margin-left: 10vw;
		margin-right: 10vw;
	}
</style>
