import { getTestBed, TestBed } from '@angular/core/testing';

import { AuthService } from '../../services/auth/auth.service';

import { LoggedInGuard } from './logged-in.guard';
import { AuthServiceMock } from '../../services/auth/auth.service.mock';

describe('LoggedInGuard', () => {
  let injector: TestBed;
  let guard: LoggedInGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: AuthService,
        useValue: AuthServiceMock,
      },
        LoggedInGuard,
      ],
    });

    injector = getTestBed();
    guard = injector.inject(LoggedInGuard);
    authService = injector.inject(AuthService);
  });

  describe('canActivate', () => {
    it('should return true when logged in', () => {
      authService.isAuthenticated = true;

      const result = guard.canActivate()

      expect(result).toBeTrue();
    });

    it('should return false when not logged in', () => {
      authService.isAuthenticated = false;

      const result = guard.canActivate()

      expect(result).toBeFalse();
    });
  });
});
