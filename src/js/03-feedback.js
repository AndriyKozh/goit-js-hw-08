import throttle from 'lodash.throttle';
console.log(throttle);

const VALUT_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  inputEl: document.querySelector('.feedback-form input'),
};

populateTextArea();

refs.form.addEventListener('submit', onFormSabmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSabmit(ev) {
  ev.preventDefault();

  const saveDate = JSON.parse(localStorage.getItem(VALUT_KEY));
  console.log(saveDate);

  ev.target.reset();
  localStorage.removeItem(VALUT_KEY);
}

function onTextareaInput(ev) {
  const {
    elements: { email, message },
  } = ev.target;
  const valueEl = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(VALUT_KEY, JSON.stringify(valueEl));
}

function populateTextArea() {
  const saveMessage = JSON.parse(localStorage.getItem(VALUT_KEY));
  if (saveMessage) {
    const { message, email } = saveMessage;
    refs.textarea.value = message;
    refs.inputEl.value = email;
    console.log(JSON.parse(localStorage.getItem(VALUT_KEY)));
  }
}
