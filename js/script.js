import defaultImageArray from './gallery-items.js';

console.log();

console.log(createImageGalleryItem(defaultImageArray));  

const imagesArrHtmlContainer = document.querySelector('.js-gallery'); 
const imagesGalleryJoined = createImageGalleryItem(defaultImageArray);

imagesArrHtmlContainer.insertAdjacentHTML('afterbegin', imagesGalleryJoined);

imagesArrHtmlContainer.addEventListener('click', onImagesContainerClick);

const modalDefaultImageEl = document.querySelector('.js-lightbox');
const imageBigModalEl = document.querySelector('.lightbox__image');

const modalCloseButton = document.querySelector('.lightbox__button');
modalCloseButton.addEventListener('click', onModalClosingClick);

const modalCloseBackdropClick = document.querySelector('.lightbox__overlay');
modalCloseBackdropClick.addEventListener('click', onModalClosingClick);

window.addEventListener('keydown', onEscBtnPress);

function createImageGalleryItem(images) {
    return images.map(({original, preview, description}) => {
        return `
        <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');
}

function onImagesContainerClick (event) {
  event.preventDefault();
  console.log(event.target);

  if(!event.target.classList.contains('gallery__image')) {
    return;
  }
  console.log(event.target);

  console.log(event.target.dataset.source);

  modalDefaultImageEl.classList.add('is-open');
  imageBigModalEl.src = event.target.dataset.source;
  
}

function onModalClosingClick (event) {
  console.log(event.target);
  modalDefaultImageEl.classList.remove('is-open');
  imageBigModalEl.src = " ";
  console.log(imageBigModalEl.src);
}

function onEscBtnPress (event) {
  console.log(event);

  if (event.code !== "Escape") {
    return;
  }
  modalDefaultImageEl.classList.remove('is-open');
  imageBigModalEl.src = " ";
}
// function onModalAppearance () {
//   modalDefaultBackdropEl.classList.add('is-open');
//   imageBigModalEl.src = event.target.dataset.source;
// }
