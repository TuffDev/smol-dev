import { writable } from 'svelte/store';
import { blocks } from './blocks.js';
import { draft } from './draft.js';

const autosave = writable(false);

blocks.subscribe(value => {
  if (autosave) {
    localStorage.setItem('blocks', JSON.stringify(value));
  }
});

draft.subscribe(value => {
  if (autosave) {
    localStorage.setItem('draft', JSON.stringify(value));
  }
});

export function enableAutosave() {
  autosave.set(true);
}

export function disableAutosave() {
  autosave.set(false);
}

export function loadAutosave() {
  const savedBlocks = localStorage.getItem('blocks');
  const savedDraft = localStorage.getItem('draft');

  if (savedBlocks) {
    blocks.set(JSON.parse(savedBlocks));
  }

  if (savedDraft) {
    draft.set(JSON.parse(savedDraft));
  }
}