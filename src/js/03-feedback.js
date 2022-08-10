import throttle from 'lodash.throttle';

const VALUT_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  inputEl: document.querySelector('.feedback-form input'),
};

populateTextArea();

refs.form.addEventListener('submit', onFormSabmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', ev => {
  formData[ev.target.name] = ev.target.value;

  localStorage.setItem(VALUT_KEY, JSON.stringify(formData));
});

function onFormSabmit(ev) {
  ev.preventDefault();

  ev.currentTarget.reset();
  localStorage.removeItem(VALUT_KEY);
}

function onTextareaInput(ev) {
  const message = ev.target.value;

  localStorage.setItem(VALUT_KEY, message);
}

function populateTextArea() {
  const saveMessage = JSON.parse(localStorage.getItem(VALUT_KEY));
  if (saveMessage.message && saveMessage.email) {
    refs.textarea.value = saveMessage.message;
    refs.inputEl.value = saveMessage.email;
    console.log(JSON.parse(localStorage.getItem(VALUT_KEY)));
  }
}
