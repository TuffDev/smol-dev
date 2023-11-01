```javascript
import { writable } from 'svelte/store';

// Initialize the draft with an empty array
let draft = writable([]);

// Function to add a block to the draft
export function addToDraft(block) {
    draft.update(draftBlocks => {
        return [...draftBlocks, block];
    });
}

// Function to remove a block from the draft
export function removeFromDraft(blockId) {
    draft.update(draftBlocks => {
        return draftBlocks.filter(block => block.id !== blockId);
    });
}

// Function to update a block in the draft
export function updateDraft(blockId, newBlock) {
    draft.update(draftBlocks => {
        return draftBlocks.map(block => block.id === blockId ? newBlock : block);
    });
}

// Function to clear the draft
export function clearDraft() {
    draft.set([]);
}

// Function to get the current draft
export function getDraft() {
    let draftBlocks;
    draft.subscribe(value => {
        draftBlocks = value;
    })();
    return draftBlocks;
}

export default draft;
```