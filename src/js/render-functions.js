import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
const markup = images
    .map(img => 
        `<li class="gallery-item">
        <a href="${img.largeImageURL}">
        <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <ul class="info">
            <li><b>Likes:</b> ${img.likes}</li>
            <li><b>Views:</b> ${img.views}</li>
            <li><b>Comments:</b> ${img.comments}</li>
            <li><b>Downloads:</b> ${img.downloads}</li>
        </ul>
    </li>`
    ).join('');

    galleryContainer.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    galleryContainer.innerHTML = '';
}

export function showLoader() {
    loader.classList.add('is-visible');
}

export function hideLoader() {
    loader.classList.remove('is-visible');
}