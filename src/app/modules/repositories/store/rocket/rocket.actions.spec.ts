import { RocketMock } from '../../services/rocket/rocket.service.mock';

import { getRocket, getRocketFailed, getRocketSuccess } from './rocket.actions';
import { RocketActions } from './rocket.const';

describe('rockets.actions', () => {
	describe('getRocket', () => {
		it('should have a getRocket action', () => {
			const action = getRocket({ id: 1 });

			expect(action.type).toBe(RocketActions.getRocket);
		});

		it('should have a getRocketSuccess action', () => {
			const rocket = RocketMock;
			const action = getRocketSuccess({ rocket });

			expect(action.type).toBe(RocketActions.getRocketSuccess);
			expect(action.rocket).toEqual(rocket);
		});

		it('should have a getRocketFailed action', () => {
			const error = new Error('Something has gone wrong!');
			const action = getRocketFailed({ error });

			expect(action.type).toBe(RocketActions.getRocketFailed);
			expect(action.error).toEqual(error);
		});
	});
});
