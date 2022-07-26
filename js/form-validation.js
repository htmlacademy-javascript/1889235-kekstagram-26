import { isEscapeKey } from './popup-image';

export const formValidate = () => {
  const form = document.querySelector('#upload-select-image');

  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'error',
    successClass: 'success',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
  }, false);
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

  const validateHashtags = (value) => re.test(value);
  const validateComments = (value) => value < 140;

  pristine.addValidator(form.querySelector('.text__hashtags'), validateHashtags, 'не правильный хештег');

  pristine.addValidator(form.querySelector('.text__description'), validateComments, 'не больше 140 символов');

  const onSubmit = (evt) => {
    evt.preventDefault();
    pristine.validate();
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

function formEditOpen() {
  changeEditContainer.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEsc);

  document.querySelector('body').classList.add('modal-open');
}

function formEditClose() {
  changeEditContainer.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEsc);

  document.querySelector('body').classList.remove('modal-open');
}


formChangeOpen.addEventListener('change ', formEditOpen);

formChangeClose.addEventListener('click ', formEditClose);


