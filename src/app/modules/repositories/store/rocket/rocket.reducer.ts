import { Action, createReducer, on } from '@ngrx/store';

import { clearRocket, getRocket, getRocketFailed, getRocketSuccess } from './rocket.actions';
import { IRocketState } from './rocket.types';

export const initialState: IRocketState = {
  rocket: null,
  loading: false,
  error: null,
};

const reducer = createReducer(
  initialState,
	on(
		getRocket,
		(state) => ({ ...state, loading: true })
	),
	on(
		getRocketSuccess,
		(_, { rocket }) => ({
			rocket,
			loading: false,
			error: null,
		})
	),
	on(
		clearRocket,
		() => (initialState)
	),
	on(
		getRocketFailed,
		(state, { error }) => ({
			...state,
      loading: false,
			error,
		})
	)
);

export const rocketReducer = (state: IRocketState, action: Action): IRocketState => reducer(state, action);
