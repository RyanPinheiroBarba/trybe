import "./style.css";
import validator from 'validator';

const textArea = document.querySelector('#text-area');
const selector = document.querySelector('#selector');
const validadeBtn = document.querySelector('#validate-btn');
const validadeReturn = document.querySelector('#validate-return');

validadeBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

const formInputs = {
  cpf: validator.isTaxID(textArea.value, 'pt-BR'),
  hexColor: validator.isHexColor(textArea.value),
  email: validator.isEmail(textArea.value),
  uuid: validator.isUUID(textArea.value, 4),
  url: validator.isURL(textArea.value)
};

validadeReturn.innerHTML = `A validação respondeu: ${formInputs[selector.value]}`;