import { Routes } from '@angular/router';

import { authenticatedGuard } from '../core/guards/authenticated/authenticated.guard';
import { StoreResolver } from '../shared/resolvers/store/store.resolver';

export const MediaRoute: { list: 'list'; search: 'search'; admin: 'admin' } = {
  list: 'list',
  search: 'search',
  admin: 'admin',
};

export const mediaRoutes: Routes = [
  {
    path: ':mediaType',
    resolve: {
      store: StoreResolver(),
    },
    children: [
      {
        path: MediaRoute.list,
        loadComponent: () => import('../shared/pages/media-list-page/media-list-page.component').then((m) => m.MediaListPageComponent),
      },
      {
        path: MediaRoute.admin,
        canActivate: [authenticatedGuard([MediaRoute.list])],
        children: [
          {
            path: MediaRoute.search,
            loadComponent: () => import('../shared/pages/media-search-page/media-search-page.component').then((m) => m.MediaSearchPageComponent),
          },
        ],
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: MediaRoute.list,
      },
    ],
  },
];
