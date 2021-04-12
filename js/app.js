'use strict'


let photosElement = document.getElementById('photos');
let leftphoto=document.getElementById('leftphoto');
let centerphoto=document.getElementById('centerphoto');
let frightphoto=document.getElementById('rightphoto');

let maxAttempts = 5;

let attemptCounter = 0;

let photosindex;
 let leftphotoIndex;
 let centerphotoIndex;
 let rightphotoIndex;

function products(name,source) {
    this.name = name;
    this.source =source;
    this.shown = 0;
    this.votes = 0;
    products.allProducts.push(this)

}
products.allProducts = [];

new products('bag', 'img/bag.jpg')
new products('banana', 'img/banana.jpg')
new products('bathroom', 'img/bathroom.jpg')
new products('boots', 'img/boots.jpg')


new products('breakfast', 'img/breakfast.jpg')
new products('bubblegum', 'img/bubblegum.jpg')
new products('chair', 'img/chair.jpg')
new products('cthulhu', 'img/cthulhu.jpg')

new products('dog', 'img/dog-duck.jpg')
new products('dragon', 'img/dragon.jpg')
new products('pen', 'img/pen.jpg')
new products('pet-sweep', 'img/pet-sweep.jpg')


new products('scissors', 'img/scissors.jpg')
new products('shark', 'img/shark.jpg')
new products('sweep', 'img/sweep.png')
new products('tauntaun', 'img/tauntaun.jpg')

new products('unicorn', 'img/unicorn.jpg')
new products('usb', 'img/usb.gif')
new products('water-can', 'img/water-can.jpg')
new products('wine-glass', 'img/wine-glass.jpg')

console.log(products.allProducts);

function generateRandomIndex() {

    return Math.floor(Math.random() * products.allProducts.length);
}
//console.log(generateRandomIndex())
function renderThreephotos() {
    leftphotoIndex= generateRandomIndex();
    centerphotoIndex = generateRandomIndex();
    rightphotoIndex = generateRandomIndex();


    while (leftphotoIndex === centerphotoIndex || centerphotoIndex === rightphotoIndex || rightphotoIndex === leftphotoIndex) {
        leftphotoIndex = generateRandomIndex();

        centerphotoIndex = generateRandomIndex();

        rightphotoIndex = generateRandomIndex();


    }
}
renderThreephotos();

photosElement.src = products.allProducts[leftphotoIndex].source;
photosElement.src = products.allProducts[centerphotoIndex].source;
photosElement.src = products.allProducts[rightphotoIndex].source;

function userClick(e) {
    attemptCounter++;
    if (attemptCounter <= maxAttempts) {
        if (e.target.id === '1') {
            products.allProducts[leftphotoIndex].votes++;
        } else if (e.target.id === '2') {

            products.allProducts[centerphotoIndex].votes++;
        }


        else { products.allProducts[rightphotoIndex].votes++; }

        renderThreephotos();
        
    }
 
        else {
            let results=getElementById('results')
            list=document.createElement("list")

            let list=document.createElement

            let productsresult;
        
            for (let i = 0; i < products.allProducts.length; i++) {
              productsresult=document.createElement('li');
              list.appendChild(productsresult);
        
              productsresult.textContent=`${products.allProducts[i].name} has ${products.allProducts[i].votes} votes`
              
            }
          photosElement.removeEventListener('click',userClick);
          
          }
        


        }
       