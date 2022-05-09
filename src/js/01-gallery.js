// import SimpleLightbox from "simple-lightbox";
import "simplelightbox/dist/simple-lightbox.js";
import "simplelightbox/dist/simple-lightbox.min.css";
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm"

// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const imageGallery = createImageGallery(galleryItems);

galleryBox.insertAdjacentHTML ('beforeend', imageGallery);

console.log(galleryBox);

function createImageGallery(items) {
   
    return items.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description} " title="${description}" />
            </a>        
        `
    }).join('');
}


new SimpleLightbox('.gallery a', { /* options */
        captionPosition: 'bottom',
        captionDelay: 250,
        
    });
