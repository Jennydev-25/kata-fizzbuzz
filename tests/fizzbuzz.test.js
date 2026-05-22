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

  // Escenario 3: Número divisible por 3 y 5, resultado esperado "FizzBuzz"
  it('should return FizzBuzz when number is divisible by 3 and 5', () => {
    const n = 15;
    const expected = 'FizzBuzz';
    const result = checkNumber(n);
    expect(result).toBe(expected);
  });

  // Escenario 4: Número no divisible por 3 ni por 5, resultado esperado el número como string
  it('should return the number as string when not divisible by 3 or 5', () => {
    const n = 7;
    const expected = '7';
    const result = checkNumber(n);
    expect(result).toBe(expected);
  });

  // Escenario 5: El dato no es un número, debe lanzar un error
  it('should throw an error when input is not a number', () => {
    expect(() => checkNumber('hola')).toThrow('El dato no es un número');
  });