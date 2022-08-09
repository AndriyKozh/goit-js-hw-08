// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';

// Additional styles import

import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// Change code below this line
const galleryEl = document.querySelector('.gallery');
const galleriItem = addImegViport(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleriItem);

function addImegViport(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" title="${description}"  alt="${description}" />
</a>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  fadeSpeed: '250',
  scrollZoom: 'true',
  animationSpeed: '250',
  captionDelay: '250',
});
