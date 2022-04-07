import { NgModule } from '@angular/core';
import { AuthModule as OAuthModule } from 'angular-auth-oidc-client';

import { AuthConfig } from './auth.config';
import { Guards } from './guards';
import { Services } from './services';

@NgModule({
  imports: [
    OAuthModule.forRoot({
      config: AuthConfig,
    }),
  ],
  providers: [
    Guards,
    Services,
  ],
  exports: [
    OAuthModule,
  ]
})
export class AuthModule {}
