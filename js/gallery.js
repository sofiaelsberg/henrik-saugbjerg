"use strict";

// Global variable
let _productImages = [];

// Fetch data from datasource (wordpress)
function getImages() {
    fetch('http://henrik-saugbjerg.sofiaelsberg.com/wp-json/wp/v2/posts')
        .then(function (response) {
            return response.json();
        })
        .then(function (images) {
            _productImages = images;
            appendImage(_productImages);
        })
}

// Appends json data fra to DOM

function appendImage(data) {
    let images = Object.values(data[0].acf);
    console.log(images);
    let htmlTemplate = "";
    for (let image of images) {
        console.log(image);
        htmlTemplate += /*html*/`
      <a href="${image.url}" class="glightbox" data-type="image">
        <img src="${image.url}">
      </a>
    `;
    }

    document.querySelector("#lightgallery").innerHTML = htmlTemplate;
    initLightGallery();
}

function initLightGallery() {
    GLightbox({
        touchNavigation: true,
        loop: true
    });
}

getImages();
