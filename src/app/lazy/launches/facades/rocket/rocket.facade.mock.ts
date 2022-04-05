import { of } from 'rxjs';

import { IRocket } from '../../../../modules/repositories/services/rocket/rocket.types';
import { RocketMock } from '../../../../modules/repositories/services/rocket/rocket.service.mock';

export const RocketFacadeMock = (rocket: IRocket = RocketMock) => ({
  getRocket: jasmine.createSpy().and.returnValue(true),
  selectRocket: jasmine.createSpy().and.returnValue(of(rocket)),
});
