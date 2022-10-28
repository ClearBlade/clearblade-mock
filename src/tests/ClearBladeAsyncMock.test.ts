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
  it('handles mock overrides for collection', async () => {
    const mock = new ClearBladeAsyncMock({
      collection: {
        fetch: jest.fn(() =>
          Promise.resolve({
            DATA: [
              {
                name: 'foo',
              },
            ],
          }),
        ),
      },
    });
    const resp = await test(mock);
    function test(client: CbServer.ClearBladeAsync) {
      return client.Collection('test').fetch(client.Query().equalTo('name', 'ClearBlade'));
    }

    expect(resp).toEqual({ DATA: [{ name: 'foo' }] });
  });
});
