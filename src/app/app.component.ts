import { Component } from '@angular/core';

import { IMenuItem } from './core/components/menu/menu.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public menuItems: IMenuItem[] = [{
    label: 'Launches',
    route: '/launches',
  }];
}
