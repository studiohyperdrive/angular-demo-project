import { Injectable, OnDestroy } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  public isAuthenticated: boolean = false;

  private readonly destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public oidcSecurityService: OidcSecurityService
  ) {
    this.oidcSecurityService.checkAuth()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(({ isAuthenticated }) => {
        this.isAuthenticated = isAuthenticated;
      });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public login(): void {
    this.oidcSecurityService.authorize();
  }

  public logout(): void {
    this.oidcSecurityService.logoff();
  }
}
