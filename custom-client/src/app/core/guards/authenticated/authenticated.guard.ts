import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

import { AuthenticationService } from '../../services/authentication/authentication.service';

export function authenticatedGuard(redirection: (string | number)[]): CanActivateFn {
  return () => {
    const authenticationService: AuthenticationService = inject(AuthenticationService);
    if (!authenticationService.isAuthenticated()) {
      const router: Router = inject(Router);
      const tree: UrlTree = router.createUrlTree(redirection);
      console.log(tree.toString());
      return tree;
    }
    return true;
  };
}
