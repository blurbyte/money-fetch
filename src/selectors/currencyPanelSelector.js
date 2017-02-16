import keys from 'ramda/src/keys';

export default function currencyPanelSelector(currencies) {
  return keys(currencies);
}
