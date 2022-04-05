import { Component } from '@angular/core';

import { LaunchFacade } from '../../facades/launch/launch.facade';
import { ILaunch } from '../../../../modules/repositories/services/launch/launch.types';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './launch-overview.page.html',
})
export class LaunchOverviewPage {
  public launches$: Observable<ILaunch[]>;

  private launchesOffset = 0;

  constructor(
    private launchFacade: LaunchFacade
  ) {
    this.getLaunches();
    this.launches$ = this.launchFacade.selectLaunches();
  }

  public getLaunches(): void {
    this.launchFacade.getLaunches(this.launchesOffset);
    this.launchesOffset = this.launchesOffset + 10;
  }
}
