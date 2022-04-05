import { createAction, props } from '@ngrx/store';

import { IRocket } from '../../services/rocket/rocket.types';

import { RocketActions } from './rocket.const';

export const getRocket = createAction(
	RocketActions.getRocket,
  props<{ id: number }>()
);

// TODO: clearRocket should clear the store
// export const clearRocket = createAction()

export const getRocketSuccess = createAction(
	RocketActions.getRocketSuccess,
	props<{ rocket: IRocket }>()
);

// TODO: getRocketFailed should store a potential error
// export const getRocketFailed = createAction()
