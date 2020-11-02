const defaultImageArr = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];


console.log(createImageGalleryItem(defaultImageArr));  

const imagesArrHtmlContainer = document.querySelector('.js-gallery'); 
const imagesGalleryJoined = createImageGalleryItem(defaultImageArr);

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
