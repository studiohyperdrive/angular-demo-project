import { has } from 'ramda';

import { adapter, initialState } from './launch.adapter';

describe('PageContentAdapter', () => {
  it('should create a new entity adapter', () => {
    [
      'addOne',
      'addMany',
      'removeOne',
      'removeMany',
      'removeAll',
      'updateOne',
      'updateMany',
      'upsertOne',
      'upsertMany',
      'map',
    ].forEach((key: string) => expect(has(key, adapter)).toBeTrue());
  });

  it('should create an initial state with isLoading and error props', () => {
    [
      'entities',
      'ids',
      'loading',
      'error',
    ].forEach((key: string) => expect(has(key, initialState)).toBeTrue());
  });
});
