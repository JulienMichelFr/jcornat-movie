import { Routes } from '@angular/router';

import { Route } from '../../app.routes';
import { authenticatedGuard } from '../../core/guards/authenticated/authenticated.guard';
import { StoreResolver } from '../../shared/resolvers/store/store.resolver';
import { MovieRoute } from '../movies/movie.routes';

import { TvShowStore } from './stores/tv-show/tv-show.store';

// eslint-disable-next-line @typescript-eslint/typedef
export const TvShowsRoute = {
  list: 'list',
  search: 'search',
} as const;

export const tvShowRoutes: Routes = [
  {
    path: TvShowsRoute.list,
    loadComponent: () => import('../../shared/pages/media-list-page/media-list-page.component').then((m) => m.MediaListPageComponent),
    resolve: {
      store: StoreResolver(TvShowStore),
    },
  },
  {
    path: TvShowsRoute.search,
    loadComponent: () => import('../../shared/pages/media-search-page/media-search-page.component').then((m) => m.MediaSearchPageComponent),
    canActivate: [authenticatedGuard([Route.tvShows, MovieRoute.list])],
    resolve: {
      store: StoreResolver(TvShowStore),
    },
  },
  { path: '**', pathMatch: 'full', redirectTo: TvShowsRoute.list },
];
