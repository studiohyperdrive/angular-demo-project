import { Component } from '@angular/core';

import { LaunchFacade } from '../../facades/launch/launch.facade';
import { ILaunch } from '../../../repositories/services/launch/launch.types';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './launch-overview.page.html',
})
export class LaunchOverviewPage {
  public launches$: Observable<ILaunch[]>;

  constructor(
    private launchFacade: LaunchFacade
  ) {
    this.launchFacade.getLaunches();

    this.launches$ = this.launchFacade.selectLaunches();
  }
}
