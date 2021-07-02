import { of } from 'rxjs';

import { ILaunch } from '../../../repositories/services/launch/launch.types';
import { LaunchesMock } from '../../../repositories/services/launch/launch.service.mock';

export const LaunchFacadeMock = (launches: ILaunch[] = LaunchesMock.results) => ({
  getLaunches: jasmine.createSpy().and.returnValue(true),
  selectLaunches: jasmine.createSpy().and.returnValue(of(launches)),
});
