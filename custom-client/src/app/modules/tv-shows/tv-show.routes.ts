import { Routes } from '@angular/router';

import { StoreResolver } from '../../shared/resolvers/store/store.resolver';

import { TvShowStore } from './stores/tv-show/tv-show.store';

// eslint-disable-next-line @typescript-eslint/typedef
export const TvShowsRoute = {
  list: 'list',
} as const;

export const tvShowRoutes: Routes = [
  {
    path: TvShowsRoute.list,
    loadComponent: () => import('../../shared/pages/media-list-page/media-list-page.component').then((m) => m.MediaListPageComponent),
    resolve: {
      store: StoreResolver(TvShowStore),
    },
  },
  { path: '**', pathMatch: 'full', redirectTo: TvShowsRoute.list },
];
