import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RocketService } from './rocket.service';
import { IRocket } from './rocket.types';
import { RocketMock } from './rocket.service.mock';

const myId = 1;

describe('LaunchService', () => {
  let injector: TestBed;
  let service: RocketService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        RocketService,
      ],
    });

    injector = getTestBed();
    service = injector.inject(RocketService);
    httpMock = injector.inject(HttpTestingController);
  });

  describe('getRocket', () => {
    it('should get a rocket detail', (done: DoneFn) => {
      const sub = service.getRocket(myId).subscribe((response: IRocket) => {
        console.log(response);
        expect(response).toEqual(RocketMock);

        sub.unsubscribe();
        done();
      });

      const req = httpMock.expectOne(`https://ll.thespacedevs.com/2.0.0/config/launcher/${myId}?format=json`);
      expect(req.request.method).toBe('GET');

      req.flush(RocketMock);
    });

    it('should handle a failed request correctly', async (done: DoneFn) => {
      const sub = service.getRocket(myId).subscribe(() => {}, (error: Error) => {
        expect(error).toBeDefined();

        sub.unsubscribe();
        done();
      });

      const req = httpMock.expectOne(`https://ll.thespacedevs.com/2.0.0/config/launcher/${myId}?format=json`);
      expect(req.request.method).toBe('GET');

      req.flush(null, {
        status: 403,
        statusText: 'Forbidden',
      });
    });
  });
});
