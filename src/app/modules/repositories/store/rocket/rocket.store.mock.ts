import { IRocketState } from './rocket.types';

import { RocketMock } from '../../services/rocket/rocket.service.mock';

export const RocketStateMock: IRocketState = {
  rocket: RocketMock,
	loading: false,
	error: null,
};
