const displaymsg = () => {
  const pTag = document.createElement('p');
  pTag.innerText = 'File uploaded';
};

const submitForm = () => {
  const form = document.getElementsByTagName('form')[0];
  const formdata = new FormData(form);

  const xhr = new XMLHttpRequest();

  xhr.open('POST', '/fileuploadhandler');
  xhr.send(formdata);
  xhr.onload = () => displaymsg();
  return;
};

const uploadFile = () => {
  const submitElement = document.getElementById('submit-button');
  submitElement.addEventListener('click', submitForm);
};

window.onload = uploadFile;
