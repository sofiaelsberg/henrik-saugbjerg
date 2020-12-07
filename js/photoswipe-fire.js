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
            console.log(_productImages);
            console.log(images);
            appendImage(_productImages);
        })
}


// Appends json data fra to DOM

function appendImage(postData) {
    console.log(postData);
    let images = Object.values(postData[0].acf);
    console.log(postData);

    let htmlTemplate = "";

    for (let image of images) {
        console.log(image.url);
        htmlTemplate += /*html*/
            `<article>
        <img src="${image.url}">
        </article>`;
    }
    document.querySelector("#smykkeImage").innerHTML = htmlTemplate;
};



console.log('hallo');

function initGallery() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'https://placekitten.com/600/400',
            w: 600,
            h: 400
        },
        {
            src: 'https://placekitten.com/1200/900',
            w: 1200,
            h: 900
        }
    ];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}

console.log(_productImages);
getImages();
initGallery();

