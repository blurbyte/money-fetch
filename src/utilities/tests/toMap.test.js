import { toMapByCode } from '../toMap';

describe('toMapByCode', () => {
  it('should transform array to hash map', () => {
    const collectionBefore = [
      {
        curency: 'dolar',
        code: 'USD',
        mid: 4.01
      },
      {
        curency: 'euro',
        code: 'EUR',
        mid: 4.32
      },
      {
        curency: 'forint',
        code: 'HUF',
        mid: 0.013
      }
    ];

    const collectionAfter = {
      'USD': {
        curency: 'dolar',
        code: 'USD',
        mid: 4.01
      },
      'EUR': {
        curency: 'euro',
        code: 'EUR',
        mid: 4.32
      },
      'HUF': {
        curency: 'forint',
        code: 'HUF',
        mid: 0.013
      },
    };

    expect(toMapByCode(collectionBefore)).toEqual(collectionAfter);

  });
});
