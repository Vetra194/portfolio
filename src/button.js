const openCloseButton = document.querySelector('.panel__button');
const boxContent = document.querySelector('.panel__content');

openCloseButton.addEventListener('click', () => {
	if (boxContent.style.display === 'none') {
    boxContent.style.display = 'block';
    openCloseButton.innerText = 'Education';
  }
  else {
    boxContent.style.display = 'none';
    openCloseButton.innerText = 'Education';
  }
});