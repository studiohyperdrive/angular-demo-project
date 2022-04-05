import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LaunchService } from './launch.service';
import { IPaginatedResponse } from '../../repositories.types';
import { ILaunch } from './launch.types';
import { LaunchesMock } from './launch.service.mock';

describe('LaunchService', function () {
  let injector: TestBed;
  let service: LaunchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        LaunchService,
      ],
    });

    injector = getTestBed();
    service = injector.inject(LaunchService);
    httpMock = injector.inject(HttpTestingController);
  });

  describe('getLaunches', () => {
    it('should get all the launches', (done: DoneFn) => {
      const sub = service.getLaunches().subscribe((response: IPaginatedResponse<ILaunch>) => {
        expect(response).toEqual(LaunchesMock);

        sub.unsubscribe();
        done();
      });

      const req = httpMock.expectOne(`https://ll.thespacedevs.com/2.0.0/launch/?format=json&offset=0`);
      expect(req.request.method).toBe('GET');

      req.flush(LaunchesMock);
    });

    it('should handle a failed request correctly', async (done: DoneFn) => {
      const sub = service.getLaunches().subscribe(() => {}, (error: Error) => {
        expect(error).toBeDefined();

        sub.unsubscribe();
        done();
      });

      const req = httpMock.expectOne(`https://ll.thespacedevs.com/2.0.0/launch/?format=json&offset=0`);
      expect(req.request.method).toBe('GET');

      req.flush(null, {
        status: 403,
        statusText: 'Forbidden',
      });
    });
  });
});
