import indexBy from 'ramda/src/indexBy';
import prop from 'ramda/src/prop';

// TODO remove nested currency
export const toMapByCode = indexBy(prop('code'));
