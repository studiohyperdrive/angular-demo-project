import { createFeatureSelector } from '@ngrx/store';

import { IRocketState } from './rocket.types';

export const ROCKET_SELECTOR = createFeatureSelector<IRocketState>('rocket');
