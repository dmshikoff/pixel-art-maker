const pixelContainer = document.querySelector('.pixel-col')
for(let i = 1; i <= 1012; i++){
  let div = document.createElement('div')
  div.classList.add('pixel', 'grey')
  pixelContainer.appendChild(div)
}

const pixel = document.querySelectorAll('.pixel')
let changeClass = function (event){
  if(pixelContainer.classList.value.includes('pixel-col')){
    event.target.classList.value = ''
    event.target.classList.add(colorSelector, 'pixel')
  }
}

pixelContainer.addEventListener('click', changeClass)

let colorSelector;
 document.querySelector('.red').addEventListener('click', function(){
   colorSelector = 'red'
   console.log('the color is now red')
 })
 document.querySelector('.green').addEventListener('click', function(){
   colorSelector = 'green'
    console.log('the color is now green')
 })
 document.querySelector('.blue').addEventListener('click', function(){
   colorSelector = 'blue'
    console.log('the color is now blue')
 })
 document.querySelector('.grey1').addEventListener('click', function(){
   colorSelector = 'grey'
    console.log('the color is now grey')
 })
 document.querySelector('.purple').addEventListener('click', function(){
   colorSelector = 'purple'
    console.log('the color is now purple')
 })
 document.querySelector('.seafoam').addEventListener('click', function(){
   colorSelector = 'seafoam'
    console.log('the color is now seafoam')
 })
 document.querySelector('.lavender').addEventListener('click', function(){
   colorSelector = 'lavender'
    console.log('the color is now lavender')
 })
