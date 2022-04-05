import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ILaunch } from '../../../../modules/repositories/services/launch/launch.types';

@Component({
  templateUrl: './launch-table.component.html',
  selector: 'app-launch-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchTableComponent {
  @Input() public launches: ILaunch[] = [];
}
