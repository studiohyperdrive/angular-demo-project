import { NgModule } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoggedInGuard } from './guards/logged-in.guard';

@NgModule({
  imports: [
    OAuthModule,
  ],
  providers: [
    LoggedInGuard,
  ],
  exports: [
    OAuthModule,
  ]
})
export class AuthModule {}
