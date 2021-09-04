export const compactNumber = (value) => {
  const suffixes = ['', 'k', 'm', 'b', 't'];

  const suffixNum = Math.floor(('' + value).length / 4);

  let shortValue = parseFloat(
    (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(
      3,
    ),
  );
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(2);
  }

  return shortValue + suffixes[suffixNum];
};

export function formatRupiah(number) {
  if (isNaN(parseInt(number))) return '';
  return new Intl.NumberFormat('id-ID', {
    maximumSignificantDigits: 5,
    style: 'currency',
    currency: 'IDR',
  }).format(number);
}

export const sumPrice = (items) => {
  return items.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
};

export const sumTax = (value) => {
  return value * (10 / 100);
};

export const sumGrandTotal = (sumTotal, tax) => {
  return parseFloat(sumTotal) + parseFloat(tax);
};
