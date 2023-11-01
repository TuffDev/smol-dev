```javascript
import { writable } from 'svelte/store';

// Define the block schema
const BlockSchema = {
  id: String,
  type: String,
  content: Object,
};

// Initial blocks
const initialBlocks = [
  {
    id: 'block-1',
    type: 'Hero',
    content: {
      title: 'Welcome to our website',
      subtitle: 'We provide the best service',
      button: 'Learn More',
    },
  },
  {
    id: 'block-2',
    type: 'Feature',
    content: {
      title: 'Our Features',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
  },
  {
    id: 'block-3',
    type: 'CTA',
    content: {
      title: 'Call to Action',
      button: 'Sign Up Now',
    },
  },
  // Add more blocks as needed
];

// Create a writable store for blocks
export const blocks = writable(initialBlocks);
```