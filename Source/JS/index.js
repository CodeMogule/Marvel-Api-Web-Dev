import { Slider } from "./slider";
import axios from "axios";

let counter = 1

window.headerSlider = new Slider()
headerSlider.sliderWipe(counter);

 let timer = setInterval(autoSlide,9000)
function autoSlide (){
    headerSlider.counter+=1;
    headerSlider.sliderWipe(headerSlider.counter)
}

window.characterSlider = new Slider();
 characterSlider.sliderWipeCharacters(counter)

 

//test
 async function getCharacters(){
     try{
     const getRes = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=adfbe33f945bd7bbefc6420a1fe57e84&hash=36d9c6c7b4db64ac4ca23f0fa90cdb40`)
     console.log(getRes)
     }
     catch(error){
         alert(error)
     }
 }
getCharacters()