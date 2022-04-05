import { adapter } from './launch.adapter';
import { ILaunchState } from './launch.types';
import { createFeatureSelector } from '@ngrx/store';

export const {
  selectIds: selectLaunchIds,
  selectEntities: selectLaunchEntities,
  selectAll: selectAllLaunches,
  selectTotal: selectTotalLaunches,
} = adapter.getSelectors();

export const LAUNCH_SELECTOR = createFeatureSelector<ILaunchState>('launch');
