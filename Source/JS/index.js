import { Slider } from "./slider";

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

 
