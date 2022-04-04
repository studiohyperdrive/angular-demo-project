import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IMenuItem } from './menu.types';

@Component({
  templateUrl: './menu.component.html',
  selector: 'app-menu',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  @Input() public menuItems: IMenuItem[] = [];
}
