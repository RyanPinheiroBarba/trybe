import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import "./style.css";

const passwordBtn = document.getElementById('generate-button');
const passwordDisplay = document.getElementById('password-area');

passwordBtn.addEventListener('click', () => {
  passwordDisplay.innerHTML = nanoid();
});

passwordDisplay.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Sua senha gerada foi copiada.');
})