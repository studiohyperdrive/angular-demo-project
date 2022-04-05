import { createAction, props } from '@ngrx/store';

import { ILaunch } from '../../services/launch/launch.types';

import { LaunchActions } from './launch.const';

export const getLaunches = createAction(
  LaunchActions.getLaunches,
  props<{ offset: number }>()
);

export const getLaunchesSucces = createAction(
  LaunchActions.getLaunchesSucces,
  props<{ results: ILaunch[] }>()
);

export const getLaunchesFailed = createAction(
  LaunchActions.getLaunchesFailed,
  props<{ error: Error }>()
);
