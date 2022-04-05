import { TestBed, getTestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { TypedAction } from '@ngrx/store/src/models';
import { BehaviorSubject, throwError } from 'rxjs';

import { RocketService } from '../../services/rocket/rocket.service';
import { RocketMock, RocketServiceMock } from '../../services/rocket/rocket.service.mock';

import { RocketEffects } from './rocket.effects';
import { RocketActions } from './rocket.const';
import { getRocket } from './rocket.actions';

describe('RocketEffects', () => {
  let injector: TestBed;
  let actions: BehaviorSubject<{ id: number; } & TypedAction<RocketActions.getRocket>>;
  let effects: RocketEffects;
  let service: RocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RocketEffects,
        {
          provide: RocketService,
          useValue: RocketServiceMock(),
        },
        provideMockStore({
          initialState: {
            'launch': {
              ids: [],
              entities: {},
              isLoading: false,
              error: null,
            },
          },
        }),
        provideMockActions(() => actions),
      ],
    });

    injector = getTestBed();
    effects = injector.inject(RocketEffects);
    service = injector.inject(RocketService);
  });

  describe('getRocket$', () => {
    it('should store the fetched item', async (done: DoneFn) => {
      actions = new BehaviorSubject(getRocket({ id: 1 }));

      const sub = effects.getRocket$.subscribe((data: Action) => {
        expect(data.type).toBe(RocketActions.getRocketSuccess);
        expect((data as any).rocket).toEqual(RocketMock);
        expect(service.getRocket).toHaveBeenCalledWith(1);

        setTimeout(() => {
          sub.unsubscribe();
          done();
        });
      });
    });

    it('should store the error when the request fails', async (done: DoneFn) => {
      const error = new Error('Something has gone wrong!');
      service.getRocket = jasmine.createSpy().and.returnValue(throwError(error));
      actions = new BehaviorSubject(getRocket({ id: 1 }));

      const sub = effects.getRocket$.subscribe((data: Action) => {
        expect(data.type).toBe(RocketActions.getRocketFailed);
        expect((data as any).error).toEqual(error);
        expect(service.getRocket).toHaveBeenCalledWith(1);

        setTimeout(() => {
          sub.unsubscribe();
          done();
        });
      });
    });
  });
});
