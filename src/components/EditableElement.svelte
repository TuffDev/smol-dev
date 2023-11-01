```svelte
<script>
  import {adjustElement} from '../lib/adjustments.js';
  export let element;
  export let elementId;

  function handleAdjustment(event) {
    adjustElement(elementId, event.target.innerHTML);
  }
</script>

<div 
  id={elementId} 
  contenteditable="true" 
  on:input={handleAdjustment}
  style={element.style}
>
  {element.content}
</div>
```