import { IRocket } from '../../services/rocket/rocket.types';

export interface IRocketState {
	rocket: IRocket;
  loading: boolean;
  error: Error;
}
