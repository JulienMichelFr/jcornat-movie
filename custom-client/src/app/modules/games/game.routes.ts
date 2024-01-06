import { Routes } from '@angular/router';

import { Route } from '../../app.routes';
import { authenticatedGuard } from '../../core/guards/authenticated/authenticated.guard';
import { StoreResolver } from '../../shared/resolvers/store/store.resolver';
import { MovieRoute } from '../movies/movie.routes';

import { GameStore } from './stores/game/game.store';

// eslint-disable-next-line @typescript-eslint/typedef
export const GamesRoute = {
  list: 'list',
  search: 'search',
} as const;

export const gameRoutes: Routes = [
  {
    path: GamesRoute.list,
    loadComponent: () => import('../../shared/pages/media-list-page/media-list-page.component').then((m) => m.MediaListPageComponent),
    resolve: {
      store: StoreResolver(GameStore),
    },
  },
  {
    path: GamesRoute.search,
    loadComponent: () => import('../../shared/pages/media-search-page/media-search-page.component').then((m) => m.MediaSearchPageComponent),
    canActivate: [authenticatedGuard([Route.games, MovieRoute.list])],
    resolve: {
      store: StoreResolver(GameStore),
    },
  },
  { path: '**', pathMatch: 'full', redirectTo: GamesRoute.list },
];
