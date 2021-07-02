import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IRepositoriesState } from '../../../repositories/store/store.types';
import { getLaunches } from '../../../repositories/store/launch/launch.actions';
import { ILaunch } from '../../../repositories/services/launch/launch.types';
import { LAUNCH_SELECTOR, selectAllLaunches } from '../../../repositories/store/launch/launch.selector';
import { filter } from 'rxjs/operators';

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
