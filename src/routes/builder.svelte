```svelte
<script>
  import { onMount } from 'svelte';
  import { blocks } from '../lib/blocks.js';
  import BlockGallery from '../components/BlockGallery.svelte';
  import Block from '../components/Block.svelte';
  import EditableElement from '../components/EditableElement.svelte';
  import UndoRedo from '../components/UndoRedo.svelte';
  import AutoSave from '../components/AutoSave.svelte';

  let selectedBlock = null;

  function selectBlock(block) {
    selectedBlock = block;
  }

  onMount(async () => {
    blocks = await fetch('/db/blocks.js').then(res => res.json());
  });
</script>

<main>
  <BlockGallery {blocks} {selectBlock} />
  {#if selectedBlock}
    <Block block={selectedBlock} on:updateBlock="{selectBlock}" />
    <EditableElement block={selectedBlock} />
  {/if}
  <UndoRedo />
  <AutoSave />
</main>

<style>
  main {
    display: flex;
    justify-content: space-between;
  }
</style>
```