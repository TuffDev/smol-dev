```svelte
<script>
  import {adjustElement} from '../lib/adjustments.js';
  export let text = '';
  export let elementId = '';

  function handleInput(event) {
    text = event.target.textContent;
    adjustElement(elementId, text);
  }
</script>

<div
  class="editable-text"
  contenteditable="true"
  on:input={handleInput}
  bind:innerHTML={text}
></div>

<style>
  .editable-text {
    border: 1px dashed #ccc;
    padding: 10px;
    margin: 10px 0;
  }
  .editable-text:focus {
    border-color: #00f;
  }
</style>
```