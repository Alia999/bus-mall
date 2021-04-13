'use strict'


let photosElement = document.getElementById('photos');
let leftphoto = document.getElementById('leftphoto');
let centerphoto = document.getElementById('centerphoto');
let frightphoto = document.getElementById('rightphoto');


let maxAttempts =25;

let attemptCounter = 0;


let leftphotoIndex;
let centerphotoIndex;
let rightphotoIndex;

let namesArray=[];
let votesArray=[];
let shownArray=[];

function Products(name, source) {
    this.name = name;
    this.source = source;
    this.shown = 0;
    this.votes = 0;
    Products.allProducts.push(this);
    namesArray.push(this.name);
}
Products.allProducts = [];

new Products('bag', './img/bag.jpg');
new Products('banana', './img/banana.jpg');
new Products('bathroom', './img/bathroom.jpg');
new Products('boots', './img/boots.jpg');


new Products('breakfast', './img/breakfast.jpg');
new Products('bubblegum', './img/bubblegum.jpg');
new Products('chair', './img/chair.jpg');
new Products('cthulhu', './img/cthulhu.jpg');

new Products('dog', './img/dog-duck.jpg');
new Products('dragon', './img/dragon.jpg');
new Products('pen', './img/pen.jpg');
new Products('pet-sweep', './img/pet-sweep.jpg');


new Products('scissors', './img/scissors.jpg');
new Products('shark', './img/shark.jpg');
new Products('sweep', './img/sweep.png');
new Products('tauntaun', './img/tauntaun.jpg');

new Products('unicorn', './img/unicorn.jpg');
new Products('usb', './img/usb.gif');
new Products('water-can', './img/water-can.jpg');
new Products('wine-glass', './img/wine-glass.jpg');

console.log(Products.allProducts);
let shownPhotosArray=[];

function generateRandomIndex() {

    return Math.floor(Math.random() * Products.allProducts.length);
}
//console.log(generateRandomIndex())
function renderThreephotos() {
    leftphotoIndex = generateRandomIndex();
    centerphotoIndex = generateRandomIndex();
    rightphotoIndex = generateRandomIndex();

    
    while (leftphotoIndex === centerphotoIndex || centerphotoIndex === rightphotoIndex || rightphotoIndex === leftphotoIndex) {
        /*  leftphotoIndex = generateRandomIndex();*/

        centerphotoIndex = generateRandomIndex();

        rightphotoIndex = generateRandomIndex();
      


    }
    
    while (leftphotoIndex === rightphotoIndex || leftphotoIndex === centerphotoIndex || rightphotoIndex === centerphotoIndex || shownPhotosArray.includes(leftphotoIndex) || shownPhotosArray.includes(centerphotoIndex) || shownPhotosArray.includes(rightphotoIndex)) {
   
    
        leftphotoIndex = generateRandomIndex();
    centerphotoIndex = generateRandomIndex();
    rightphotoIndex = generateRandomIndex();
    } 
  
    

    leftphoto.src = Products.allProducts[leftphotoIndex].source;
    Products.allProducts[leftphotoIndex].shown++;
    centerphoto.src = Products.allProducts[centerphotoIndex].source;
    Products.allProducts[centerphotoIndex].shown++;
    rightphoto.src = Products.allProducts[rightphotoIndex].source;
    Products.allProducts[rightphotoIndex].shown++;

   
}
renderThreephotos();



photosElement.addEventListener('click',userClick);

function userClick(e) {
    attemptCounter++;
    if (attemptCounter <= maxAttempts) {
        if (e.target.id === 'leftphoto') {
            Products.allProducts[leftphotoIndex].votes++;
        } else if (e.target.id === 'centerphoto') {

            Products.allProducts[centerphotoIndex].votes++;
        }
        else if (e.target.id === 'rightphoto') { Products.allProducts[rightphotoIndex].votes++; }

        else { attemptCounter--; }

        renderThreephotos();

    }

    else {
        photosElement.removeEventListener('click',userClick);

       let  button=document.getElementById('button');
        button.addEventListener('click',Button);

        for (let i = 0; i < Products.allProducts.length; i++) {
            votesArray.push(Products.allProducts[i].votes);
            shownArray.push(Products.allProducts[i].shown);
            
          }
          
      
          
          chart();

      function Button(click){
          let list=document.getElementById('list');
          let productsresult;
          
        for (let i = 0; i < Products.allProducts.length; i++) {
            let  productsresult = document.createElement('li');
              list.appendChild(productsresult);
  
              productsresult.textContent = `${Products.allProducts[i].name} has ${Products.allProducts[i].votes} votes and was shown ${Products.allProducts[i].shown} times`;
              button.removeEventListener('click', Button);
          }
         
  

      }


        

    }

    

}


function chart() {
    let ctx = document.getElementById('myChart').getContext('2d');
    
    let chart= new Chart(ctx,{
      
     type: 'bar',
  
   
     data:{
     
        labels: namesArray,
        
        datasets: [
          {
          label: 'product votes',
          data: votesArray,
          backgroundColor: [
            'rgb(251, 93, 76)',
          ],
    
          borderWidth: 1
        },
  
        {
          label: 'products shown',
          data: shownArray,
          backgroundColor: [
            'black',
          ],
    
          borderWidth: 1
        }
        
      ]
      },
      options: {}
    });
    
  }