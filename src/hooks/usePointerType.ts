'use client';

import { useSyncExternalStore } from 'react';

const FINE_POINTER = Object.freeze({ isFine: true, isTouch: false });
const COARSE_POINTER = Object.freeze({ isFine: false, isTouch: true });

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mqFine = window.matchMedia('(pointer: fine)');
  mqFine.addEventListener('change', callback);
  return () => mqFine.removeEventListener('change', callback);
}

function getSnapshot() {
  if (typeof window === 'undefined') return COARSE_POINTER;
  return window.matchMedia('(pointer: fine)').matches ? FINE_POINTER : COARSE_POINTER;
}

function getServerSnapshot() {
  return COARSE_POINTER;
}

export function usePointerType() {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
}
