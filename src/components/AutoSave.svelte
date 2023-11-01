```svelte
<script>
  import { onMount } from 'svelte';
  import { autosave } from '../lib/autosave.js';
  import { draft } from '../lib/draft.js';

  let autoSaveInterval;

  onMount(() => {
    autoSaveInterval = setInterval(() => {
      autosave(draft);
    }, 5000); // autosave every 5 seconds

    return () => {
      clearInterval(autoSaveInterval);
    };
  });
</script>

<div>
  <p>Autosave is active. Your changes are being saved every 5 seconds.</p>
</div>
```