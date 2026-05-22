// Genera un array con los resultados de checkNumber del 1 al 100
import { checkNumber } from './fizzbuzz.js';

export function generateSequence() {
  const sequence = [];
  for (let i = 1; i <= 100; i++) {
    sequence.push(checkNumber(i));
  }
  return sequence;
}