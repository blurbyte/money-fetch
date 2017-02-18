import { toHashMapByCode } from '../toMap';

describe('toMapByCode', () => {
  it('should transform array to hash map', () => {
    const collectionBefore = [
      {
        currency: 'dolar',
        code: 'USD',
        mid: 4.01
      },
      {
        currency: 'euro',
        code: 'EUR',
        mid: 4.32
      },
      {
        currency: 'forint',
        code: 'HUF',
        mid: 0.013
      }
    ];

    const collectionAfter = {
      'USD': {
        currency: 'dolar',
        exchange: 4.01
      },
      'EUR': {
        currency: 'euro',
        exchange: 4.32
      },
      'HUF': {
        currency: 'forint',
        exchange: 0.013
      },
    };

    expect(toHashMapByCode(collectionBefore)).toEqual(collectionAfter);

  });
});
