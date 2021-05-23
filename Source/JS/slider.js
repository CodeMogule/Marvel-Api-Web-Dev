 const slider = document.querySelectorAll('.slider-custom')
 const dots = document.querySelectorAll('.dot')

 let counter = 1
 

 sliderWipe(counter)

 let timer = setInterval(automaticSlide,9000)

 function automaticSlide(){
counter+=1
sliderWipe(counter)
 }

 function addSlider(x){
     counter+=x
     sliderWipe(counter)
 } 

 function currslider(x){
     counter = x
     sliderWipe(counter)
 }

 function sliderWipe(x){
     let i;

     for(i=0;i<slider.length;i++){
         slider[i].style.display = 'none'
     }

     for(i=0;i<dots.length;i++){
         dots[i].classList.remove('active')
     }

    if(x>slider.length){
         counter = 1
     }

     else if (x<1){
         counter = slider.length
     }

     slider[counter - 1].style.display = 'block'
     dots[counter - 1].classList.add('active')
 }