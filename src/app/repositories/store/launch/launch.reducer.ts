import { Action, createReducer, on } from '@ngrx/store';

import { adapter, initialState } from './launch.adapter';
import { getLaunches, getLaunchesFailed, getLaunchesSucces } from './launch.actions';
import { ILaunchState } from './launch.types';

const reducer = createReducer(
  initialState,
  on(
    getLaunches,
    (state) => ({ ...state, isLoading: true })
  ),
  on(
    getLaunchesSucces,
    (state, { results }) => adapter.upsertMany(results, {
      ...state,
      isLoading: false,
      error: null,
    })
  ),
  on(
    getLaunchesFailed,
    (state, { error }) => ({
      ...state,
      isLoading: false,
      error,
    })
  ),
);

export function launchReducer(state: ILaunchState, action: Action): ILaunchState {
  return reducer(state, action);
}
