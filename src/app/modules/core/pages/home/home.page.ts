import { Component } from '@angular/core';

import { AuthService } from '../../../auth/services/auth/auth.service';

@Component({
  templateUrl: './home.page.html',
})
export class HomePage {
  constructor(
    public readonly authService: AuthService
  ) {}
}
