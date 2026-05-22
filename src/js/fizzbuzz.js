export function checkNumber(n) {
  // Divisible por 3 y 5, devuelve "FizzBuzz"
  if (n % 15 === 0) return 'FizzBuzz';
  // Divisible por 3, devuelve "Fizz"
  if (n % 3 === 0) return 'Fizz';
  // Divisible por 5, devuelve "Buzz"
  if (n % 5 === 0) return 'Buzz';
  // No divisible por 3 ni por 5, devuelve el número como string
  return String(n);
}