import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Ініціалізація Lightbox
let lightbox;

export function createGallery(images) {
  const galleryContainer = document.querySelector('.gallery');

  const galleryMarkup = images
    .map(
      image => `
      <div class="photo-card">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span>${image.likes}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span>${image.views}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span>${image.comments}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span>${image.downloads}</span>
          </div>
        </div>
      </div>
    `
    )
    .join('');

  galleryContainer.innerHTML = galleryMarkup;

  // Ініціалізація або оновлення lightbox
  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}

// Очищення галереї
export function clearGallery() {
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = '';
}

// Відображення/приховування лоадера
export function showLoader() {
  document.querySelector('.loader').classList.remove('is-hidden');
}

export function hideLoader() {
  document.querySelector('.loader').classList.add('is-hidden');
}
