import { Routes } from '@angular/router';

// eslint-disable-next-line @typescript-eslint/typedef
export const Route = {
  home: 'home',
  login: 'login',
  media: 'media',
} as const;

export const routes: Routes = [
  { path: Route.home, loadComponent: () => import('./core/pages/home/home.component').then((m) => m.HomeComponent) },
  {
    path: Route.login,
    loadComponent: () => import('./core/pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: Route.media,
    loadComponent: () => import('./shared/pages/media-page/media-page.component').then((m) => m.MediaPageComponent),
    loadChildren: () => import('./modules/media.routes').then((m) => m.mediaRoutes),
  },
  { path: '**', pathMatch: 'full', redirectTo: Route.home },
];
