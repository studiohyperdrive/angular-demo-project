import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { RocketService } from '../../services/rocket/rocket.service';
import { IRocket } from '../../services/rocket/rocket.types';

import { getRocketFailed, getRocketSuccess } from './rocket.actions';
import { RocketActions } from './rocket.const';
import { IRocketState } from './rocket.types';

@Injectable()
export class RocketEffects {
	public getRocket$ =
		createEffect(() => this.actions$.pipe(
			ofType(RocketActions.getRocket),
			switchMap(({ id }) => this.pageRocket.getRocket(id).pipe(
				map((rocket: IRocket) => getRocketSuccess({ rocket })),
				catchError((error: Error) => of(getRocketFailed({ error })))
			))
		));

	constructor(
			private actions$: Actions,
			private store$: Store<IRocketState>,
			private pageRocket: RocketService
	) {}
}
