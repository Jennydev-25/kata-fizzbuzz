import { checkNumber } from './src/js/fizzbuzz.js';
import { generateSequence } from './src/js/sequence.js';

// Sección 1: Prueba la función
const form = document.querySelector('.fizzbuzz-checker__form');
const input = document.querySelector('.fizzbuzz-checker__input');
const result = document.querySelector('.fizzbuzz-checker__result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const number = Number(input.value);
  result.textContent = checkNumber(number);
});

// Sección 2: Secuencia completa
const list = document.querySelector('.fizzbuzz-sequence__list');

generateSequence().forEach((item, index) => {
  const li = document.createElement('li');
  li.textContent = `${index + 1} — ${item}`;
  list.appendChild(li);
});