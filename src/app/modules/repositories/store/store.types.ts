import { EntityState } from '@ngrx/entity';

import { ILaunchState } from './launch/launch.types';
import { IRocketState } from './rocket/rocket.types';

export interface IEntityState<T = unknown> extends EntityState<T> {
  loading: boolean;
  error: Error;
}

export interface IRepositoriesState {
  launch: ILaunchState;
  rocket: IRocketState;
}
