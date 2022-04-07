import { getTestBed, TestBed } from '@angular/core/testing';
import { OAuthService } from 'angular-oauth2-oidc';

import { LoggedInGuard } from './logged-in.guard';

const OAuthServiceMock = {
  hasValidIdToken: jasmine.createSpy(),
  hasValidAccessToken: jasmine.createSpy(),
};

describe('LoggedInGuard', () => {
  let injector: TestBed;
  let guard: LoggedInGuard;
  let oAuthService: OAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: OAuthService,
        useValue: OAuthServiceMock,
      },
        LoggedInGuard,
      ],
    });

    injector = getTestBed();
    guard = injector.inject(LoggedInGuard);
    oAuthService = injector.inject(OAuthService);
  });

  describe('canActivate', () => {
    it('should return true when logged in', () => {
      oAuthService.hasValidIdToken = jasmine.createSpy().and.returnValue(true);
      oAuthService.hasValidAccessToken = jasmine.createSpy().and.returnValue(true);
      const result = guard.canActivate()

      expect(result).toBeTrue();
    });

    it('should return false when not logged in', () => {
      oAuthService.hasValidIdToken = jasmine.createSpy().and.returnValue(false);
      oAuthService.hasValidAccessToken = jasmine.createSpy().and.returnValue(false);

      const result = guard.canActivate()

      expect(result).toBeFalse();
    });
  });
});
