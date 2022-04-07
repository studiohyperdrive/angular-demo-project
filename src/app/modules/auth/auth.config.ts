import { LogLevel, OpenIdConfiguration } from 'angular-auth-oidc-client';

import { environment } from '../../../environments/environment';

// Example: https://github.com/damienbod/angular-auth-oidc-client/blob/main/projects/sample-code-flow-auth0/src/app/auth-config.module.ts

export const AuthConfig: OpenIdConfiguration = {
  authority: 'https://shd-playground.eu.auth0.com',
  redirectUrl: environment.oauth.redirectUri,
  postLogoutRedirectUri: environment.oauth.postLogoutRedirectUri,
  clientId: 'zc4Zkt5eAZA6LBYDMjjyiU32ZqRAdDTH',
  scope: 'openid profile',
  responseType: 'code',
  silentRenew: true,
  useRefreshToken: true,
  logLevel: LogLevel.Debug,
  customParamsRefreshTokenRequest: {
    scope: 'openid profile',
  },
};
