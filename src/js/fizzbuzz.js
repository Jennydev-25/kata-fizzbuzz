export function checkNumber(n) {
  if (typeof n !== 'number') throw new Error('El dato no es un número');

  const isDivisibleByThreeAndFive = n % 15 === 0;
  const isDivisibleByThree = n % 3 === 0;
  const isDivisibleByFive = n % 5 === 0;

  if (isDivisibleByThreeAndFive) return 'FizzBuzz';
  if (isDivisibleByThree) return 'Fizz';
  if (isDivisibleByFive) return 'Buzz';
  return String(n);
}