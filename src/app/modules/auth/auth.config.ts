import { AuthConfig as IAuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../../environments/environment';

export const AuthConfig: IAuthConfig = {
  redirectUri: environment.oauth.redirectUri,
  issuer: 'https://shd-playground.eu.auth0.com/',
  clientId: 'zc4Zkt5eAZA6LBYDMjjyiU32ZqRAdDTH',
  scope: 'openid profile email',
  logoutUrl: 'https://shd-playground.eu.auth0.com/v2/logout',
  postLogoutRedirectUri: environment.oauth.postLogoutRedirectUri,
};
