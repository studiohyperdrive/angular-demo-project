import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { IRepositoriesState } from '../../../../modules/repositories/store/store.types';
import { getLaunches } from '../../../../modules/repositories/store/launch/launch.actions';
import { ILaunch } from '../../../../modules/repositories/services/launch/launch.types';
import { LAUNCH_SELECTOR, selectAllLaunches } from '../../../../modules/repositories/store/launch/launch.selector';

@Injectable()
export class LaunchFacade {
  private _selectAll = createSelector(
    LAUNCH_SELECTOR,
    selectAllLaunches,
  )

  constructor(
    private store: Store<IRepositoriesState>
  ) {}

  public getLaunches(offset: number = 0): void {
    this.store.dispatch(getLaunches({ offset }));
  }

  public selectLaunches(): Observable<ILaunch[]> {
    return this.store.select(this._selectAll)
      .pipe(
        filter((launches: ILaunch[]) => Array.isArray(launches))
      );
  }
}
