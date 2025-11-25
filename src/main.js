import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', event => {
    event.preventDefault();

const query = input.value.trim();

if (!query) {
    iziToast.error({
    title: 'Error',
    message: 'Please enter a search query.',
});
return;
}

clearGallery();
showLoader();

getImagesByQuery(query)
    .then(data => {
    const images = data.hits;

if (!images.length) {
    iziToast.info({
    title: 'No results',
    message: 'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
}

createGallery(images);
})
.catch(() => {
    iziToast.error({
    title: 'Error',
    message: 'Something went wrong. Please try again later.',
});
})
.finally(() => {
    hideLoader();
});
});