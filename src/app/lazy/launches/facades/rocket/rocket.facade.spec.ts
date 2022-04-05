import { getTestBed, TestBed } from '@angular/core/testing';
import { first } from 'rxjs/operators';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { RocketStateMock } from '../../../../modules/repositories/store/rocket/rocket.store.mock';
import { IRepositoriesState } from '../../../../modules/repositories/store/store.types';
import { RocketMock } from '../../../../modules/repositories/services/rocket/rocket.service.mock';
import { IRocket } from '../../../../modules/repositories/services/rocket/rocket.types';
import { getRocket } from '../../../../modules/repositories/store/rocket/rocket.actions';

import { RocketFacade } from './rocket.facade';

const storeContent = {
  'rocket': RocketStateMock,
};

describe('RocketFacade', () => {
  let injector: TestBed;
  let facade: RocketFacade;
  let store: MockStore<IRepositoriesState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        RocketFacade,
        provideMockStore({
          initialState: storeContent,
        }),
      ],
    });

    injector = getTestBed();
    facade = injector.inject(RocketFacade);
    store = injector.inject(MockStore);
  });

  describe('selectors', () => {
    describe('selectRocket', () => {
      it('should have a selector to select all rocket from the state', () => {
        // tslint:disable-next-line: no-string-literal
        const item = facade['_selectOne'](storeContent);

        expect(item).toEqual(RocketMock);
      });

      it('should setup a subscription to return those rocket', async (done: DoneFn) => {
        const sub = facade.selectRocket()
          .pipe(first())
          .subscribe((rocket: IRocket) => {
            expect(rocket).toEqual(RocketMock);

            setTimeout(() => {
              sub.unsubscribe();
              done();
            });
          });
      });
    });
  });

  describe('actions', () => {
    describe('getRocket', () => {
      it('should dispatch an action to get and store rocket', () => {
        // tslint:disable-next-line: no-string-literal
        const dispatchSpy = spyOn(store, 'dispatch');

        facade.getRocket(1);

        expect(dispatchSpy).toHaveBeenCalledWith(getRocket({ id: 1 }) as any);
      });
    });
  });
});
