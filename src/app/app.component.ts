import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

import { IMenuItem } from './modules/core/components/menu/menu.types';
import { AuthConfig } from './modules/auth/auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  public menuItems: IMenuItem[] = [{
    label: 'Home',
    route: '/',
  }, {
    label: 'Launches',
    route: '/launches',
  }];

  constructor(
    private readonly oAuthService: OAuthService
  ) {}

  public ngOnInit(): void {
    console.log({
      AuthConfig,
    })
    this.oAuthService.configure(AuthConfig);
    this.oAuthService.setStorage(sessionStorage);

    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLogin({});
    });
  }
}
