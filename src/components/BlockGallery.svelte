```svelte
<script>
  import { blocks } from '../lib/blocks.js';
  import Block from './Block.svelte';

  let selectedBlock = null;

  function selectBlock(block) {
    selectedBlock = block;
  }
</script>

<style>
  .block-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>

<div class="block-gallery">
  {#each blocks as block (block.id)}
    <div on:click={() => selectBlock(block)}>
      <Block {block} />
    </div>
  {/each}
</div>

{#if selectedBlock}
  <Block {selectedBlock} />
{/if}
```