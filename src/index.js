console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
 let dogUL = document.querySelector("#dog-breeds")

 fetch("https://dog.ceo/api/breeds/image/random/4")
 .then(response => response.json())
 .then(handleImageAppending)


  fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(response => {
    let dogBreedsArr = Object.keys(response.message)
    dogBreedsArr.forEach(addLI)
  })
  
  dogUL.addEventListener("click", function(event) {
    console.log(event)
  })
  
//DOM Content Loaded
})
   
 function handleImageAppending(jsonObject) {
  let dogImageContainer = document.getElementById('dog-image-container')
  let arrOfDogURLs = jsonObject.message
  arrOfDogURLs.forEach(url => {
   dogImageContainer.innerHTML += makeImgTagString(url)
  })
 }

 function makeImgTagString(url) {
  return `<img src="${url}"/>`
 }
 
 function addLI(breed){
  let dogUL = document.querySelector("#dog-breeds")
  dogUL.innerHTML += `<li data-info="breed">${breed}!</li>`
}
 