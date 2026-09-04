'use client';

import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mqFine = window.matchMedia('(pointer: fine)');
  mqFine.addEventListener('change', callback);
  return () => mqFine.removeEventListener('change', callback);
}

function getSnapshot() {
  if (typeof window === 'undefined') return { isFine: false, isTouch: true };
  const isFine = window.matchMedia('(pointer: fine)').matches;
  return { isFine, isTouch: !isFine };
}

export function usePointerType() {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => ({ isFine: false, isTouch: true })
  );
}
