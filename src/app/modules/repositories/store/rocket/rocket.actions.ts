import { createAction, props } from '@ngrx/store';

import { IRocket } from '../../services/rocket/rocket.types';

import { RocketActions } from './rocket.const';

export const getRocket = createAction(
	RocketActions.getRocket,
  props<{ id: number }>()
);

export const clearRocket = createAction(
	RocketActions.clearRocket
);

export const getRocketSuccess = createAction(
	RocketActions.getRocketSuccess,
	props<{ rocket: IRocket }>()
);

export const getRocketFailed = createAction(
	RocketActions.getRocketFailed,
	props<{ error: Error }>()
);
