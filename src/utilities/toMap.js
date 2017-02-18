import reduce from 'ramda/src/reduce';

export const toHashMapByCode = reduce((result, item) => {
  result[item.code] = { currency: item.currency, exchange: item.mid };
  return result;
}, {});
