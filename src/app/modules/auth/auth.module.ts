import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';

import { Guards } from './guards';

@NgModule({
  imports: [
    OAuthModule,
  ],
  providers: [
    Guards,
  ],
  exports: [
    OAuthModule,
  ]
})
export class AuthModule {}
