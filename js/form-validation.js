import { isEscapeKey } from './utils.js';
const form = document.querySelector('#upload-select-image');
export const formValidate = () => {

  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'form__error'
  });

  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

  const validateHashtags = (value) => {
    if (value) {
      const hashtags = value.split(' ');
      const similarHashtags = [];
      for (let i = 0; i <= hashtags.length - 1; i++) {
        if (!re.test(hashtags[i]) || hashtags.length > 5 || similarHashtags.includes(hashtags[i])) {
          return false;
        }
        similarHashtags.push(hashtags[i]);
      }
    }
    return true;
  };

  pristine.addValidator(form.querySelector('.text__hashtags'), validateHashtags, 'не правильный хештег');

  const onSubmit = (evt) => {
    if (!pristine.validate()) {
      evt.preventDefault();
    }

  };

  form.addEventListener('submit', onSubmit);
};


const onPopupEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    formEditClose();
  }
};

const changeEditContainer = document.querySelector('.img-upload__overlay');
const formChangeOpen = document.querySelector('#upload-file');
const formChangeClose = changeEditContainer.querySelector('#upload-cancel');

let areInputsFocused = false;

function formEditOpen() {
  changeEditContainer.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEsc);

  document.querySelector('body').classList.add('modal-open');

}

function formEditClose() {
  if (areInputsFocused === true) {
    return;
  }

  document.querySelector('.img-upload__form').reset();
  changeEditContainer.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEsc);
  document.querySelector('body').classList.remove('modal-open');
}

formChangeOpen.addEventListener('change', formEditOpen);

formChangeClose.addEventListener('click', formEditClose);

document
  .querySelectorAll('.img-upload__field-wrapper')
  .forEach((input) => {
    input.addEventListener('focusin', () => {
      areInputsFocused = true;
    });
    input.addEventListener('focusout', () => {
      areInputsFocused = false;
    });
  });
