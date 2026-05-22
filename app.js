import { checkNumber } from './src/js/fizzbuzz.js';
import { generateSequence } from './src/js/sequence.js';

// Sección 1: Prueba la función
const form = document.querySelector('.fizzbuzz-checker__form');
const input = document.querySelector('.fizzbuzz-checker__input');
const result = document.querySelector('.fizzbuzz-checker__result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value;
  try {
    const number = Number(value);
    result.textContent = checkNumber(isNaN(number) || value === '' ? value : number);
    result.classList.remove('fizzbuzz-checker__result--error');
  } catch (error) {
    result.textContent = error.message;
    result.classList.add('fizzbuzz-checker__result--error');
  }
});

// Sección 2: Secuencia completa
const list = document.querySelector('.fizzbuzz-sequence__list');

generateSequence().forEach((item, index) => {
  const li = document.createElement('li');
  li.textContent = `${index + 1} — ${item}`;
  if (item === 'Fizz') li.classList.add('fizz');
  else if (item === 'Buzz') li.classList.add('buzz');
  else if (item === 'FizzBuzz') li.classList.add('fizzbuzz');
  else li.classList.add('number');
  list.appendChild(li);
});