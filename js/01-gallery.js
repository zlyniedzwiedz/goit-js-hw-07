import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
let instance = basicLightbox.create("")
const galleryImage = document.querySelector("gallery_image")
const imageHandler = (image) => {
 image.preventDefault()
 instance = basicLightbox.create(`<img class="gallery__image"
 src="${image.target.getAttribute("data-source")}"
alt="${image.target.alt}"
/>`)
instance.show()
}

const galleryMarkup = galleryItems
  .map((image) => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </div>`
  )
  .join("");

  galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);

  galleryList.addEventListener("click", imageHandler)

  galleryList.addEventListener("keydown", (event) => {
    if (event.key === "Escape" ) {
        instance.close()
    }

  })


  //

  