import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { ILaunch } from '../../services/launch/launch.types';
import { DEFAULT_ENTITY_STATE } from '../store.const';

import { ILaunchState } from './launch.types';

export const adapter: EntityAdapter<ILaunch> = createEntityAdapter<ILaunch>({
  selectId: entity => entity.id,
});

export const initialState: ILaunchState = adapter.getInitialState(DEFAULT_ENTITY_STATE) as ILaunchState;
