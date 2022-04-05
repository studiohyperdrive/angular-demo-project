import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { IRepositoriesState } from '../../../../modules/repositories/store/store.types';

@Injectable()
export class RocketFacade {
  // TODO: add a private method that uses ROCKET_SELECTOR and unwraps the state to only return 'rocket'
  // private _selectOne = createSelector()

  constructor(
    private store: Store<IRepositoriesState>
  ) {}

  public getRocket(id: number) {
    // TODO: dispatch the correct action to trigger a fetch and store a rocket
    // TODO: don't forget to add a return type to our method
  }

  public selectRocket() {
    // TODO: select the rocket from the store
    // TODO: don't forget to add a return type to our method
  }
}
