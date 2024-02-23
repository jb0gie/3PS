import { writable } from 'svelte/store';

export const activeTab = writable('browse');
export let activeGenresTab = writable('');