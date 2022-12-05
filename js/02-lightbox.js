import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");
const galleryMarkup = galleryItems
  .map(
    (image) =>
      `<a class="gallery__item" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
  </a>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);

var lightbox = new SimpleLightbox('.gallery .gallery__item', {captionsData: "alt", captionDelay: 250 /* options */ });
