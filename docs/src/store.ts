import { writable } from 'svelte/store';
import type { Doc } from '@types/docs';

export const selectedVersion = writable('0.0.6');
export const selectedModule = writable<null | string>(null);
export const selectedDoc = writable<null | Doc>(null);