```svelte
<script>
  import { onMount } from 'svelte';
  import { draft } from '../lib/draft.js';
  import AutoSave from '../components/AutoSave.svelte';
  import Block from '../components/Block.svelte';

  let blocks = [];

  onMount(async () => {
    blocks = draft.blocks;
  });

  function saveDraft() {
    draft.blocks = blocks;
    draft.save();
  }
</script>

<AutoSave {blocks} />

<main>
  <h1>Draft Mode</h1>
  <button on:click={saveDraft}>Save Draft</button>
  <div class="blocks">
    {#each blocks as block (block.id)}
      <Block {block} />
    {/each}
  </div>
</main>

<style>
  .blocks {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
```