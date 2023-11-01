```svelte
<script>
  import { publishSite } from '../lib/publish.js';
  import { draft } from '../lib/draft.js';

  const publish = async () => {
    await publishSite(draft);
  };
</script>

<main>
  <h1>Publish your website</h1>
  <button on:click={publish}>Publish</button>
</main>
```