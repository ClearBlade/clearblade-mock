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
      return client
        .Collection<{ name: string }>('test')
        .fetch(client.Query().equalTo('name', 'ClearBlade'))
        .then((data) =>
          data.DATA.map((row) => ({
            name: `${row.name} bar`,
          })),
        );
    }

    expect(resp).toEqual([{ name: 'foo bar' }]);
  });

  describe('Query', () => {
    it('handles a single equalTo', () => {
      const mock = new ClearBladeAsyncMock();
      mock.Query().equalTo('foo', 'bar');
      expect(mock.mocks.query.equalTo).toHaveBeenCalledWith('foo', 'bar');
    });

    it('handles multiple equalTo', () => {
      const mock = new ClearBladeAsyncMock();
      mock.Query().equalTo('foo', 'bar').equalTo('baz', 'foo');
      expect(mock.mocks.query.equalTo).toHaveBeenNthCalledWith(1, 'foo', 'bar');
      expect(mock.mocks.query.equalTo).toHaveBeenNthCalledWith(2, 'baz', 'foo');
    });

    it('accepts a custom mock', () => {
      const myMock = jest.fn();
      const mock = new ClearBladeAsyncMock({ query: { equalTo: myMock } });
      mock.Query().equalTo('foo', 'bar').equalTo('baz', 'foo');
      expect(myMock).toHaveBeenNthCalledWith(1, 'foo', 'bar');
      expect(myMock).toHaveBeenNthCalledWith(2, 'baz', 'foo');
    });
  });
});
