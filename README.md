# clearblade-mock

Utility library for mocking ClearBlade native libraries in unit tests

## Installation

```
npm i -D @clearblade/clearblade-mock
```

## Usage

```
import { ClearBladeAsyncMock } from '@clearblade/clearblade-mock';

describe('your test suite', () => {
  it('handles your test case', async () => {
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
});
```
