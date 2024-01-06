import { resolve } from '@angular/compiler-cli';
import { Routes } from '@angular/router';

import { Route } from '../../app.routes';
import { authenticatedGuard } from '../../core/guards/authenticated/authenticated.guard';
import { StoreResolver } from '../../shared/resolvers/store/store.resolver';

import { MovieStore } from './stores/movie/movie.store';

// eslint-disable-next-line @typescript-eslint/typedef
export const MovieRoute = {
  list: 'list',
  search: 'search',
} as const;

export const movieRoutes: Routes = [
  {
    path: MovieRoute.list,
    loadComponent: () => import('../../shared/pages/media-list-page/media-list-page.component').then((m) => m.MediaListPageComponent),
    resolve: {
      store: StoreResolver(MovieStore),
    },
  },
  {
    path: MovieRoute.search,
    loadComponent: () => import('../../shared/pages/media-search-page/media-search-page.component').then((m) => m.MediaSearchPageComponent),
    canActivate: [authenticatedGuard([Route.movies, MovieRoute.list])],
    resolve: {
      store: StoreResolver(MovieStore),
    },
  },
  { path: '**', pathMatch: 'full', redirectTo: MovieRoute.list },
];
