```svelte
<script>
  import { undo, redo } from '../lib/undoRedo.js';

  function handleUndo() {
    undo();
  }

  function handleRedo() {
    redo();
  }
</script>

<div class="undo-redo-controls">
  <button on:click={handleUndo}>Undo</button>
  <button on:click={handleRedo}>Redo</button>
</div>
```