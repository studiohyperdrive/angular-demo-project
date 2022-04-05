import { Action, createReducer, on } from '@ngrx/store';

import { getRocket } from './rocket.actions';
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
  // TODO: add reducers for getRocketSuccess, getRocketError & clearRocket
);

export const rocketReducer = (state: IRocketState, action: Action): IRocketState => reducer(state, action);
