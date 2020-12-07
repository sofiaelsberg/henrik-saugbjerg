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
            appendImage(_productImages.acf);


        })
}


// Appends json data fra to DOM

function appendImage(images) {
    let htmlTemplate = "";
    for (let image in images) {
        console.log(image);
        htmlTemplate += /*html*/
            '<article>' +
            '<img src="' + image.acf.image1 + '">' +
            '</article>';
    }
    document.querySelector("#smykker").innerHTML = htmlTemplate;


};

// Returns the source URL of the featured image of given post
// function getFeaturedImageUrl(post) {
//     let imageUrl = "";
//     if (post._embedded['wp:featuredmedia']) {
//         imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
//     }
//     return imageUrl;

// }

console.log(_productImages);
getImages();


console.log('hallo');
