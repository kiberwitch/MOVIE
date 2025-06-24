const showMoreBtn = document.getElementById('show-more');
const photos = document.querySelector('.photos-wrapper');

showMoreBtn.onclick = () => {
  if (showMoreBtn.textContent.trim() === 'Показать больше') {
    photos.classList.add('active');

    showMoreBtn.textContent = 'Скрыть';
  } else {
    photos.classList.remove('active');
    showMoreBtn.textContent = 'Показать больше';
  }
};
