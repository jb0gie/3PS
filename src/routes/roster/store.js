import { writable } from 'svelte/store';

export const activeTab = writable('music');
export let activeGenresTab = writable('');