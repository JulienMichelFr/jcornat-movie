import { Routes } from '@angular/router';

import { StoreResolver } from '../../shared/resolvers/store/store.resolver';

import { GameStore } from './stores/game/game.store';

// eslint-disable-next-line @typescript-eslint/typedef
export const GamesRoute = {
  list: 'list',
} as const;

export const gameRoutes: Routes = [
  {
    path: GamesRoute.list,
    loadComponent: () => import('../../shared/pages/media-list-page/media-list-page.component').then((m) => m.MediaListPageComponent),
    resolve: {
      store: StoreResolver(GameStore),
    },
  },
  { path: '**', pathMatch: 'full', redirectTo: GamesRoute.list },
];
