import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IRepositoriesState } from '../../../../modules/repositories/store/store.types';
import { ROCKET_SELECTOR } from '../../../../modules/repositories/store/rocket/rocket.selector';
import { IRocketState } from '../../../../modules/repositories/store/rocket/rocket.types';
import { getRocket } from '../../../../modules/repositories/store/rocket/rocket.actions';
import { IRocket } from '../../../../modules/repositories/services/rocket/rocket.types';

@Injectable()
export class RocketFacade {
  private _selectOne = createSelector(
    ROCKET_SELECTOR,
    (state: IRocketState) => state.rocket
  )

  constructor(
    private store: Store<IRepositoriesState>
  ) {}

  public getRocket(id: number): void {
    this.store.dispatch(getRocket({ id }));
  }

  public selectRocket(): Observable<IRocket> {
    return this.store.select(this._selectOne);
  }
}
