export const formValidate = () => {
  const form = document.querySelector('#upload-select-image');

  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'form__item--invalid',
    successClass: 'form__item--valid',
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
