const getSqr = (number) => number * number;

const isDivider = (number, divider) => number % divider === 0;

const isCommonDivider = (divider, numbers = []) => (
  numbers.every((number) => isDivider(number, divider))
);

const isEven = (number) => isDivider(number, 2);

const isPrime = (number) => {
  if (isDivider(number, 2)) {
    return number === 2;
  }

  let divider = 3;

  while (getSqr(divider) <= number && !isDivider(number, divider)) {
    divider += 2;
  }

  return getSqr(divider) > number;
};

export default {
  isDivider,
  isCommonDivider,
  isEven,
  isPrime,
};
