import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, Signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public readonly isAuthenticated: Signal<boolean>;

  //#region Injection
  private readonly http: HttpClient = inject(HttpClient);
  private readonly tokenService: TokenService = inject(TokenService);
  //#endregion

  protected constructor() {
    this.isAuthenticated = computed(() => !!this.tokenService.token());
  }

  public login(username: string, password: string): Observable<void> {
    return this.http.post<{ token: string; refresh: string }>('api/login', { username, password }).pipe(
      tap(({ token, refresh }) => {
        this.tokenService.setToken(token);
        this.tokenService.setRefreshToken(refresh);
      }),
      map(() => void 0),
    );
  }

  public logout(): void {
    this.tokenService.reset();
  }
}
