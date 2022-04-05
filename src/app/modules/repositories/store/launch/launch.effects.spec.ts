import { TestBed, getTestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { TypedAction } from '@ngrx/store/src/models';
import { BehaviorSubject, throwError } from 'rxjs';

import { LaunchService } from '../../services/launch/launch.service';
import { LaunchesMock, LaunchServiceMock } from '../../services/launch/launch.service.mock';

import { getLaunches } from './launch.actions';
import { LaunchActions } from './launch.const';
import { LaunchEffects } from './launch.effects';

describe('LaunchEffects', () => {
  let injector: TestBed;
  let actions: BehaviorSubject<{ offset: number; } & TypedAction<LaunchActions.getLaunches>>;
  let effects: LaunchEffects;
  let service: LaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LaunchEffects,
        {
          provide: LaunchService,
          useValue: LaunchServiceMock(),
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
    effects = injector.inject(LaunchEffects);
    service = injector.inject(LaunchService);
  });

  describe('getLaunches$', () => {
    it('should store the fetched item', async (done: DoneFn) => {
      actions = new BehaviorSubject(getLaunches({ offset: 10 }));

      const sub = effects.getLaunches$.subscribe((data: Action) => {
        expect(data.type).toBe(LaunchActions.getLaunchesSucces);
        expect((data as any).results).toEqual(LaunchesMock.results);
        expect(service.getLaunches).toHaveBeenCalledWith(10);

        setTimeout(() => {
          sub.unsubscribe();
          done();
        });
      });
    });

    it('should store the error when the request fails', async (done: DoneFn) => {
      const error = new Error('Something has gone wrong!');
      service.getLaunches = jasmine.createSpy().and.returnValue(throwError(error));
      actions = new BehaviorSubject(getLaunches({ offset: 10 }));

      const sub = effects.getLaunches$.subscribe((data: Action) => {
        expect(data.type).toBe(LaunchActions.getLaunchesFailed);
        expect((data as any).error).toEqual(error);
        expect(service.getLaunches).toHaveBeenCalledWith(10);

        setTimeout(() => {
          sub.unsubscribe();
          done();
        });
      });
    });
  });

});
