import { getTestBed, TestBed } from '@angular/core/testing';
import { first } from 'rxjs/operators';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { LaunchStateMock } from '../../../repositories/store/launch/launch.store.mock';
import { IRepositoriesState } from '../../../repositories/store/store.types';
import { LaunchesMock } from '../../../repositories/services/launch/launch.service.mock';

import { LaunchFacade } from './launch.facade';
import { ILaunch } from '../../../repositories/services/launch/launch.types';
import { getLaunches } from '../../../repositories/store/launch/launch.actions';

const storeContent = {
  'launch': LaunchStateMock,
};

describe('LaunchFacade', () => {
  let injector: TestBed;
  let facade: LaunchFacade;
  let store: MockStore<IRepositoriesState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        LaunchFacade,
        provideMockStore({
          initialState: storeContent,
        }),
      ],
    });

    injector = getTestBed();
    facade = injector.inject(LaunchFacade);
    store = injector.inject(MockStore);
  });

  describe('selectors', () => {
    describe('selectLaunches', () => {
      it('should have a selector to select all launches from the state', () => {
        // tslint:disable-next-line: no-string-literal
        const item = facade['_selectAll'](storeContent);

        expect(item).toEqual(LaunchesMock.results);
      });

      it('should setup a subscription to return those launches', async (done: DoneFn) => {
        const sub = facade.selectLaunches()
          .pipe(first())
          .subscribe((launches: ILaunch[]) => {
            expect(launches).toEqual(LaunchesMock.results);

            setTimeout(() => {
              sub.unsubscribe();
              done();
            });
          });
      });
    });
  });

  describe('actions', () => {
    describe('getLaunches', () => {
      it('should dispatch an action to get and store launches', () => {
        // tslint:disable-next-line: no-string-literal
        const dispatchSpy = spyOn(store, 'dispatch');

        facade.getLaunches(10);

        expect(dispatchSpy).toHaveBeenCalledWith(getLaunches({ offset: 10 }) as any);
      });
    });
  });
});
