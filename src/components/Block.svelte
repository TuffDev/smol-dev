```svelte
<script>
  import { blocks } from '../lib/blocks.js';
  import { adjustments } from '../lib/adjustments.js';
  import EditableElement from './EditableElement.svelte';
  import { updateBlock } from '../lib/autosave.js';

  export let blockId;

  let block = blocks.find(b => b.id === blockId);
  let adjustment = adjustments[blockId] || {};

  function adjustElement(elementId, newAdjustment) {
    adjustment[elementId] = newAdjustment;
    updateBlock(blockId, block, adjustment);
  }
</script>

<div class="block" id="{blockId}">
  {#each block.elements as element, i (element.id)}
    <EditableElement {element} {adjustment[element.id]} on:adjust={e => adjustElement(element.id, e.detail)} />
  {/each}
</div>
```