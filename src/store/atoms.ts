import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export interface User {
  id: string;
  username: string;
  avatar?: string;
}

export const tokenAtom = atomWithStorage<string | null>('token', null, {
  getItem: (key) => localStorage.getItem(key),
  setItem: (key, value) => {
    if (value) localStorage.setItem(key, value);
    else localStorage.removeItem(key);
  },
  removeItem: (key) => localStorage.removeItem(key),
});

export const userAtom = atomWithStorage<User | null>('currentUser', null, {
  getItem: (key) => {
    const raw = sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  },
  setItem: (key, value) => {
    if (value) sessionStorage.setItem(key, JSON.stringify(value));
    else sessionStorage.removeItem(key);
  },
  removeItem: (key) => sessionStorage.removeItem(key),
});

export const isLoggedInAtom = atom((get) => get(userAtom) !== null);
