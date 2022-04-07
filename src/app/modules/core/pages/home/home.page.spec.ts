import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from '../../../auth/services/auth/auth.service';
import { AuthServiceMock } from '../../../auth/services/auth/auth.service.mock';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let fixture: ComponentFixture<HomePage>;
  let component: HomePage;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [{
        provide: AuthService,
        useValue: AuthServiceMock,
      }],
      declarations: [
        HomePage
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);

    fixture.detectChanges();
  });

  describe('login', () => {
    it('should trigger a login through the authService', () => {
      const loginButton = fixture.debugElement.nativeElement.querySelector('button.button.is-dark');
      loginButton.disabled = false;
      loginButton.click();

      fixture.detectChanges();

      expect(authService.login).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('should trigger a logout through the authService', () => {
      authService.isAuthenticated = true;

      const logoutButton = fixture.debugElement.nativeElement.querySelector('button.button.is-light');
      logoutButton.click();

      fixture.detectChanges();

      expect(authService.logout).toHaveBeenCalled();
    });
  });
});
