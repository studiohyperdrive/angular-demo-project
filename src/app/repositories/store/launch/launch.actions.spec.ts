import { LaunchesMock } from '../../services/launch/launch.service.mock';

import { getLaunches, getLaunchesFailed, getLaunchesSucces } from './launch.actions';
import { LaunchActions } from './launch.const';

describe('launch.actions', () => {
  describe('getLaunches', () => {
    it('should have a getLaunches action', () => {
      const action = getLaunches({ offset: 10 });

      expect(action.type).toBe(LaunchActions.getLaunches);
      expect(action.offset).toBe(10);
    });

    it('should have a getLaunchesSuccess action', () => {
      const { results } = LaunchesMock;
      const action = getLaunchesSucces({ results });

      expect(action.type).toBe(LaunchActions.getLaunchesSucces);
      expect(action.results).toEqual(results);
    });

    it('should have a getLaunchesFailed action', () => {
      const error = new Error();
      const action = getLaunchesFailed({ error });

      expect(action.type).toBe(LaunchActions.getLaunchesFailed);
      expect(action.error).toEqual(error);
    });
  })
});
