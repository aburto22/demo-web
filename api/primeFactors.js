function isPrime(number) {
  return [...Array(number).keys()]
    .filter((digits) => digits > 1)
    .every((digit) => number % digit !== 0);
}

function getFirstPrimeFactor(num) {
  return [...Array(num + 1).keys()]
    .filter((digits) => digits > 1)
    .find((prime) => isPrime(prime) && num % prime === 0);
}

function findPrimeFactors(number) {
  if (typeof number !== 'number' || Number.isNaN(number)) {
    return 'please give a number';
  }
  if (number <= 0) {
    return 'please give a positive number.';
  }
  if (!Number.isInteger(number)) {
    return 'please give an integer';
  }

  const primeFactors = [];
  let num = number;

  while (num !== 1) {
    const primeFactor = getFirstPrimeFactor(num);
    primeFactors.push(primeFactor);
    num /= primeFactor;
  }

  return primeFactors;
}

module.exports = findPrimeFactors;
