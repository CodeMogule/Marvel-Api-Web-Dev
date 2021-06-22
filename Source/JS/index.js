import { Slider } from "./slider";
import * as character from './Characters';
import { elements } from "./elements";
import * as loaders from './loader';


let counter = 1;

try{
window.headerSlider = new Slider()
headerSlider.sliderWipe(counter);

 let timer = setInterval(autoSlide,9000)
function autoSlide (){
    headerSlider.counter+=1;
    headerSlider.sliderWipe(headerSlider.counter)
}

window.characterSlider = new Slider();
 //characterSlider.sliderWipeCharacters(counter)
} catch(error){
    console.log(`error`)
}



  let get = new character.Characters;

  let scrollCounter = 0;

  
window.scrollRight = function(){
     if(scrollCounter <= elements.heroes.scrollWidth - elements.heroes.clientWidth){
        elements.heroes.scrollTo({
            top:0,
            left:(scrollCounter+=scrollPer),
            behavior: 'smooth'
        })
     }
 }

 window.scrollLeftz = function(){
    console.log(111)
   elements.heroes.scrollTo({
       top:0,
       left:(scrollCounter-=scrollPer),
       behavior: 'smooth'
   })
   if(scrollCounter < 0){
       scrollCounter = 0
   }
}



 let scrollPer = 400;

 const getcharacters = async ()=> {
//spinner
loaders.loader()
//display characters both for the home and the characters page
get.getCharacters()
await get.displayHeroes()
//clear Loader
loaders.removeLoader()
 }

 getcharacters()



  
 
