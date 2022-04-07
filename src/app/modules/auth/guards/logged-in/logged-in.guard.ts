import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(
    private oAuthService: OAuthService
  ) {}

  public canActivate(): boolean {
    const hasIdToken = this.oAuthService.hasValidIdToken();
    const hasAccessToken = this.oAuthService.hasValidAccessToken();

    return (hasIdToken && hasAccessToken);
  }
}
