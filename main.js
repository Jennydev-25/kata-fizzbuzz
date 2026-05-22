// Imprime los resultados de FizzBuzz del 1 al 100
import { generateSequence } from './src/js/sequence.js';

const sequence = generateSequence();
sequence.forEach((result) => console.log(result));