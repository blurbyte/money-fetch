import keys from 'ramda/src/keys';

export default function currencyPickerSelector(currencies) {
  return keys(currencies);
}
