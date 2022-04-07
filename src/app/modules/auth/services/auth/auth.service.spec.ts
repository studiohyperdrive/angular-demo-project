import { getTestBed, TestBed } from '@angular/core/testing';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { of } from 'rxjs';

import { AuthService } from './auth.service';

const OidcSecurityServiceMock = {
  checkAuth: jasmine.createSpy().and.returnValue(of({
    isAuthenticated: true,
  })),
  authorize: jasmine.createSpy(),
  logoff: jasmine.createSpy(),
};

describe('AuthService', () => {
  let injector: TestBed;
  let service: AuthService;
  let oidcSecurityService: OidcSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: OidcSecurityService,
        useValue: OidcSecurityServiceMock,
      },
        AuthService,
      ],
    });

    injector = getTestBed();
    service = injector.inject(AuthService);
    oidcSecurityService = injector.inject(OidcSecurityService);
  });

  describe('construct', () => {
    it('should subscribe to the checkAuth method in the constructor', () => {
      expect(oidcSecurityService.checkAuth).toHaveBeenCalled();
    });
  });

  describe('login', () => {
    it('should call the authorize method when attempting a login', () => {
      service.login();

      expect(oidcSecurityService.authorize).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('should call the logoff method when attempting to logout', () => {
      service.logout();

      expect(oidcSecurityService.logoff).toHaveBeenCalled();
    });
  });
});
