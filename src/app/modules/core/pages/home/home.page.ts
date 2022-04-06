import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  templateUrl: './home.page.html',
})
export class HomePage {
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

  public get isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }
}
