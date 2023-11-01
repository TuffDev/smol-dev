```javascript
import { writable } from 'svelte/store';
import { BlockSchema } from '../db/blocks.js';

// Initialize blocks store
export const blocks = writable([]);

// Function to save a block
export function saveBlock(block) {
  blocks.update(blocks => {
    const index = blocks.findIndex(b => b.id === block.id);
    if (index !== -1) {
      // Update existing block
      blocks[index] = block;
    } else {
      // Add new block
      blocks.push(block);
    }
    return blocks;
  });
}

// Function to validate a block
export function validateBlock(block) {
  return BlockSchema.validate(block);
}

// Function to load blocks from the database
export async function loadBlocks() {
  const response = await fetch('/api/blocks');
  const data = await response.json();
  blocks.set(data.map(block => validateBlock(block) ? block : null).filter(block => block));
}
```