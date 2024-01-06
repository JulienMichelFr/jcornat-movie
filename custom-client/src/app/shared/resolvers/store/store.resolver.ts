import { inject, Type } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { MediumStore } from '../../../core/signal-store/media-signal.store';

export function StoreResolver(store: Type<MediumStore>): ResolveFn<MediumStore> {
  return () => {
    const injected: MediumStore = inject(store);
    return Promise.resolve(injected);
  };
}
