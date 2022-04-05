import {
  LAUNCH_SELECTOR,
  selectAllLaunches,
  selectLaunchEntities,
  selectLaunchIds,
  selectTotalLaunches
} from './launch.selector';
import { LaunchStateMock } from './launch.store.mock';

describe('launch.selector', () => {
  describe('LAUNCH_SELECTOR', () => {
    it('should select the launch feature from the store', () => {
      const feature = LAUNCH_SELECTOR({
        'launch': LaunchStateMock,
      });

      expect(feature).toEqual(LaunchStateMock);
    });
  });

  describe('Default adapter selectors', () => {
    it('should expose the selectLaunchIds selector created by the adapter', () => {
      const ids = selectLaunchIds(LaunchStateMock);

      expect(ids).toEqual(LaunchStateMock.ids);
    });

    it('should expose the selectLaunchEntities selector created by the adapter', () => {
      const entities = selectLaunchEntities(LaunchStateMock);

      expect(entities[LaunchStateMock.ids[0]]).toEqual(LaunchStateMock.entities[LaunchStateMock.ids[0]]);
    });

    it('should expose the selectAllLaunches selector created by the adapter', () => {
      const results = selectAllLaunches(LaunchStateMock);
      const firstResult = results[0];

      expect(firstResult).toEqual(LaunchStateMock.entities[firstResult.id]);
    });

    it('should expose the selectTotalLaunches selector created by the adapter', () => {
      const total = selectTotalLaunches(LaunchStateMock);

      expect(total).toBe(1);
    });
  });
});
