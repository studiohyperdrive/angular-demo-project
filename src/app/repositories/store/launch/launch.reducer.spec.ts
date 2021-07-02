import { LaunchesMock } from '../../services/launch/launch.service.mock';

import { launchReducer } from './launch.reducer';
import { initialState } from './launch.adapter';
import { getLaunches, getLaunchesFailed, getLaunchesSucces } from './launch.actions';

describe('launchReducer', () => {
  describe('getLaunches', () => {
    it('should handle the getLaunches action', () => {
      const state = launchReducer(initialState, getLaunches({ offset: 0 }));

      expect(state.loading).toBeTrue();
    });

    it('should handle the getLaunchesSuccess action', () => {
      const { results } = LaunchesMock;
      const firstResult = results[0];
      const state = launchReducer(initialState, getLaunchesSucces({ results }));

      expect(state.loading).toBeFalse();
      expect(state.entities[firstResult.id]).toEqual(firstResult);
    });

    it('should handle the getLaunchesFailed action', () => {
      const error = new Error('Something has gone wrong!');
      const state = launchReducer(initialState, getLaunchesFailed({ error }));

      expect(state.loading).toBeFalse();
      expect(state.error).toEqual(error);
    });
  });
});
