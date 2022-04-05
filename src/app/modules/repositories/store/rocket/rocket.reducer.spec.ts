import { RocketMock } from '../../services/rocket/rocket.service.mock';

import { clearRocket, getRocket, getRocketFailed, getRocketSuccess } from './rocket.actions';
import { initialState, rocketReducer } from './rocket.reducer';

describe('rocketReducer', () => {
	describe('getRocket', () => {
		it('should handle the getRocket action', () => {
			const state = rocketReducer(initialState, getRocket({ id: 1 }));

			expect(state.loading).toBe(true);
		});

		it('should handle the getRocketSuccess action', () => {
			const rocket = RocketMock;
			const state = rocketReducer(initialState, getRocketSuccess({ rocket }));

			expect(state.loading).toBe(false);
			expect(state.rocket).toEqual(rocket);
		});

		it('should handle the clearRocket action', () => {
			const state = rocketReducer(initialState, clearRocket());

			expect(state.loading).toBe(false);
			expect(state.rocket).toEqual(null);
		});

		it('should handle the getRocketFailed action', () => {
			const error = new Error('Something has gone wrong!');
			const state = rocketReducer(initialState, getRocketFailed({ error }));

			expect(state.loading).toBe(false);
			expect(state.error).toEqual(error);
		});
	});
});
