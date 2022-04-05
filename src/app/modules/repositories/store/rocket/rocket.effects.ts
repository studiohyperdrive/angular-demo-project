import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { RocketService } from '../../services/rocket/rocket.service';

import { IRocketState } from './rocket.types';

@Injectable()
export class RocketEffects {
  // TODO: create an effect that intercepts getRocket and fetches the rocket. It should handle an error if the request fails.
	// public getRocket$ = createEffect();

	constructor(
			private actions$: Actions,
			private store$: Store<IRocketState>,
			private pageRocket: RocketService
	) {}
}
