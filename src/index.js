console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
   loadImages();
   loadBreeds();
})

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(results => {
      results.message.forEach(image => addImage(image))
    });
}

function addImage(imgUrl) {
  const container = document.getElementById("dog-image-container");
  const newImg = document.createElement('img');
  newImg.src = imgUrl;
  container.appendChild(newImg);
}

function loadBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  return fetch(brdUrl)
    .then(resp => resp.json())
    