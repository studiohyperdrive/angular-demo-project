import { LaunchMock } from '../../services/launch/launch.service.mock';

import { ILaunchState } from './launch.types';

export const contentId = LaunchMock.id;

export const LaunchStateMock: ILaunchState = {
  ids: [contentId],
  entities: {
    [contentId]: LaunchMock,
  },
  loading: false,
  error: null,
};
