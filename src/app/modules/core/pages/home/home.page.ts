import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  templateUrl: './home.page.html',
})
export class HomePage {
  public get isLoggedIn(): boolean {
    const hasIdToken = this.oAuthService.hasValidIdToken();
    const hasAccessToken = this.oAuthService.hasValidAccessToken();

    return (hasIdToken && hasAccessToken);
  }

  constructor(
    private readonly oAuthService: OAuthService
  ) {}

  public login(): void {
    this.oAuthService.initImplicitFlow();
  }

  public logout(): void {
    this.oAuthService.revokeTokenAndLogout({
      client_id: this.oAuthService.clientId,
      returnTo: this.oAuthService.postLogoutRedirectUri,
    }, true)
  }
}