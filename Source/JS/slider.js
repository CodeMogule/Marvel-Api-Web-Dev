 import { elements } from "./elements";

 export function Slider(){
    this.counter = 1; 
    this.addSlider = function(x){
        this.counter+=x;
        this.sliderWipe(this.counter);
    };
    
    this.addSlideCharacter = function(x){
        this.counter+=x;
        this.sliderWipeCharacters(this.counter);
    };
    
    this.currslider = function(x){
        this.counter = x;
        this.sliderWipe(this.counter);
    }
    this.sliderWipe = function(x){
        let i;

        //header
     for(i=0;i<elements.slider.length;i++){
         elements.slider[i].style.display = 'none';
     };

     
     for(i=0;i<elements.dots.length;i++){
         elements.dots[i].classList.remove('active');
     };

     //header
    if(x>elements.slider.length){
         this.counter = 1;
     }

     else if (x<1){
         this.counter = elements.slider.length;
     }

     elements.slider[this.counter - 1].style.display = 'block';
     elements.dots[this.counter - 1].classList.add('active');
    }
 }



 
 /*
 Slider.prototype.sliderWipeCharacters = function(x){
     let i;
     //characters section
     for(i=0;i<elements.sliderCharacter.length;i++){
        elements.sliderCharacter[i].style.display = 'none';
    };

     //character section 
     if(x>elements.sliderCharacter.length){
        this.counter = 1;
    }

    else if (x<1){
        this.counter = elements.sliderCharacter.length;
    }

    elements.sliderCharacter[this.counter - 1].style.display = 'block';
    elements.sliderCharacter[this.counter - 1].style.display = 'flex';
 } 
 */