import { writable } from 'svelte/store';
import { blocks } from './blocks.js';
import { draft } from './draft.js';

export const publishSite = writable(false);

publishSite.subscribe(value => {
  if (value) {
    const siteContent = blocks.map(block => {
      const draftBlock = draft.find(d => d.id === block.id);
      return draftBlock ? draftBlock : block;
    });

    // Here you would typically send the siteContent to a backend service to be saved and published
    // For the purpose of this example, we'll just log it
    console.log('Publishing site with content:', siteContent);

    // Reset the publishSite store to false after publishing
    publishSite.set(false);
  }
});