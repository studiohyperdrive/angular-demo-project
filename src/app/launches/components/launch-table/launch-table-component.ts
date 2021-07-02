import { Component, Input } from '@angular/core';

import { ILaunch } from '../../../repositories/services/launch/launch.types';

@Component({
  templateUrl: './launch-table.component.html',
  selector: 'app-launch-table',
})
export class LaunchTableComponent {
  @Input() public launches: ILaunch[] = [];
}
