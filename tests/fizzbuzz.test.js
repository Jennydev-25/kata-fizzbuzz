import { describe, it, expect } from 'vitest';
import { checkNumber } from '../src/js/fizzbuzz.js';

describe('FizzBuzz', () => {

  // Escenario 1: Número divisible por 3, resultado esperado "Fizz"
  it('should return Fizz when number is divisible by 3', () => {
    const n = 3;
    const expected = 'Fizz';
    const result = checkNumber(n);
    expect(result).toBe(expected);
  });

});

// Escenario 2: Número divisible por 5, resultado esperado "Buzz"
  it('should return Buzz when number is divisible by 5', () => {
    const n = 5;
    const expected = 'Buzz';
    const result = checkNumber(n);
    expect(result).toBe(expected);
  });