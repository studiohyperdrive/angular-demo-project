import { AuthConfig as IAuthConfig } from 'angular-oauth2-oidc';

export const AuthConfig: IAuthConfig = {
  redirectUri: `${window.location.origin}/auth/callback`,
  issuer: 'https://shd-playground.eu.auth0.com/',
  clientId: 'zc4Zkt5eAZA6LBYDMjjyiU32ZqRAdDTH',
  scope: 'openid profile email',
  logoutUrl: 'https://shd-playground.eu.auth0.com/v2/logout',
  postLogoutRedirectUri: `${window.location.origin}/auth/callback`,
};
