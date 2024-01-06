import { Routes } from '@angular/router';

import { StoreResolver } from '../../shared/resolvers/store/store.resolver';

import { MovieStore } from './stores/movie/movie.store';

// eslint-disable-next-line @typescript-eslint/typedef
export const MovieRoute = {
  list: 'list',
} as const;

export const movieRoutes: Routes = [
  {
    path: MovieRoute.list,
    loadComponent: () => import('../../shared/pages/media-list-page/media-list-page.component').then((m) => m.MediaListPageComponent),
    resolve: {
      store: StoreResolver(MovieStore),
    },
  },
  { path: '**', pathMatch: 'full', redirectTo: MovieRoute.list },
];
