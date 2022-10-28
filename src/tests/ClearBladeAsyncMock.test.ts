import { ClearBladeAsyncMock } from '../ClearBladeAsyncMock';

describe('ClearBladeAsyncMock', () => {
  it('handles basic mocking', async () => {
    const mock = new ClearBladeAsyncMock();
    test(mock);
    function test(client: CbServer.ClearBladeAsync) {
      return client.Collection('test').fetch(client.Query().equalTo('name', 'ClearBlade'));
    }
    expect(mock.mocks.collection.fetch).toHaveBeenCalled();
    expect(mock.mocks.query.equalTo).toHaveBeenCalled();
  });
});
