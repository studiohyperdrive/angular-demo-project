import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(
    private AuthService: AuthService
  ) {}

  public canActivate(): boolean {
    return this.AuthService.isAuthenticated;
  }
}
