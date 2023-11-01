import { writable } from 'svelte/store';

// Define the initial state of adjustments
const initialState = {};

// Create a writable store for adjustments
export const adjustments = writable(initialState);

// Define the AdjustmentSchema
export const AdjustmentSchema = {
  blockId: '',
  elementId: '',
  properties: {}
};

// Function to adjust an element
export const adjustElement = (blockId, elementId, properties) => {
  adjustments.update(state => {
    // If the blockId doesn't exist in the state, add it
    if (!state[blockId]) {
      state[blockId] = {};
    }

    // If the elementId doesn't exist in the state for the given blockId, add it
    if (!state[blockId][elementId]) {
      state[blockId][elementId] = {};
    }

    // Update the properties of the element
    state[blockId][elementId] = { ...state[blockId][elementId], ...properties };

    return state;
  });
};
