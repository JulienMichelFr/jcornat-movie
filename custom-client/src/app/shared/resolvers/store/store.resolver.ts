import { inject, Type } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

import { MediumStore } from '../../../core/signal-store/media-signal.store';
import { MediaType } from '../../../core/types/media-type.type';
import { GameStore } from '../../../modules/games/stores/game/game.store';
import { MovieStore } from '../../../modules/movies/stores/movie/movie.store';
import { TvShowStore } from '../../../modules/tv-shows/stores/tv-show/tv-show.store';

export function StoreResolver(): ResolveFn<MediumStore> {
  return (route: ActivatedRouteSnapshot) => {
    const injected: MediumStore = inject(getInjected(route.paramMap.get('mediaType') as MediaType));
    return Promise.resolve(injected);
  };
}

function getInjected(mediaType: MediaType): Type<MediumStore> {
  switch (mediaType) {
    case 'movie':
      return MovieStore;
    case 'game':
      return GameStore;
    case 'tv-show':
      return TvShowStore;
  }
}
