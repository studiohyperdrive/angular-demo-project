import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OAuthService } from 'angular-oauth2-oidc';

import { AuthConfig } from '../../../auth/auth.config';

import { HomePage } from './home.page';

const OAuthServiceMock = {
  clientId: AuthConfig.clientId,
  postLogoutRedirectUri: AuthConfig.postLogoutRedirectUri,
  initImplicitFlow: jasmine.createSpy(),
  revokeTokenAndLogout: jasmine.createSpy(),
  hasValidIdToken: jasmine.createSpy().and.returnValue(true),
  hasValidAccessToken: jasmine.createSpy().and.returnValue(true),
};

describe('HomePage', () => {
  let fixture: ComponentFixture<HomePage>;
  let component: HomePage;
  let oAuthService: OAuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [{
        provide: OAuthService,
        useValue: OAuthServiceMock,
      }],
      declarations: [
        HomePage
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    oAuthService = TestBed.inject(OAuthService);

    fixture.detectChanges();
  });

  describe('login', () => {
    it('should trigger a login through the oAuthService', () => {
      component.login();

      expect(oAuthService.initImplicitFlow).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('should trigger a logout through the oAuthService', () => {
      component.logout();

      expect(oAuthService.revokeTokenAndLogout).toHaveBeenCalledWith({
        client_id: AuthConfig.clientId,
        returnTo: AuthConfig.postLogoutRedirectUri,
      }, true);
    });
  });

  describe('isLoggedIn', () => {
    it('should return a boolean, indicating if the user is logged in', () => {
      const isLoggedIn = component.isLoggedIn;

      expect(isLoggedIn).toBeTrue();
    });
  });
});
