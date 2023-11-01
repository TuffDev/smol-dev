```svelte
<script>
	import { blocks } from '$lib/blocks.js';
	import BlockGallery from '$components/BlockGallery.svelte';
	import AutoSave from '$components/AutoSave.svelte';
	import UndoRedo from '$components/UndoRedo.svelte';
</script>

<main>
	<h1>Welcome to the Website Builder</h1>
	<BlockGallery {blocks} />
	<AutoSave />
	<UndoRedo />
	<a href="/builder">Start Building</a>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	a {
		color: #333;
	}
</style>
```