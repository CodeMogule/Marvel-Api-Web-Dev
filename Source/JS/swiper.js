import {elements} from './elements'
import {Slider} from './slider'

 
let touchable = {
    draging: false,
    startingpos: 0,
    currtrans: 0,
    prevTran : 0,
    currIndex:0,
    animationId:0
}

export function startTouch(){
    try{
    elements.slider.forEach((slider,index) => {
        window.swipe = new Slider()
        const slideImg = slider.querySelector('img')
        slideImg.addEventListener('dragstart', (event) => {
            event.preventDefault()
        })
//mobile touch events
slider.addEventListener('touchstart',touchStart(index))
slider.addEventListener('touchend',touchEnd)
slider.addEventListener('touchmove',touchMove)

//pc mouse events
slider.addEventListener('mousedown',touchStart(index))
slider.addEventListener('mouseUp',touchEnd)
slider.addEventListener('mouseleave', touchEnd)
slider.addEventListener('mousemove', touchMove)

function touchStart(index){
    return function(event){
        touchable.currIndex = index
       touchable.draging = true
      touchable.startingpos = grabPositionX(event);
    }
}

function touchEnd(){
    touchable.draging = false
}

function touchMove(event){
    if(touchable.draging){
        let currpos = grabPositionX(event);
      swipe.addSlider(1)
    }
}
       
    })
} catch(error){

}
} 
 
window.contentMenu = function(e){
    e.preventDefault();
    e.stopPropagation()
    return false
}

function grabPositionX(event) {
    return event.type.includes('mouse')? event.pageX : event.touches[0].clientX
}

function grabPositionY(event) {
    return event.type.includes('mouse')? event.pageX : event.touches[0].clientY
}





let startingX , startingY , movingX , movingY ;
function touchStart(evt){
    startingX = grabPositionX(evt);
    startingY = grabPositionY(evt);
    }			
    function touchMove(evt){
            movingX = grabPositionX(evt)
            movingY = grabPositionY(evt)
                    }
                    
        function touchEnd(){
            if(startingX+100 < movingX){
                scrollLeftz()
                    } else if(startingX-100 > movingX){
             scrollRight()
                        }
                 
                 if(startingY+100 < movingY){
                console.log('down');
                 } else if(startingY-100 > movingY){
                console.log('up');
                                         }
                    }

export function scrollSwipeCharacters(){
    
        try{
            //character 
    elements.heroes.addEventListener('touchstart',touchStart)
    elements.heroes.addEventListener('touchmove',touchMove)
    elements.heroes.addEventListener('touchend',touchEnd)
    elements.heroes.addEventListener('mousedown',touchStart)
    elements.heroes.addEventListener('mouseup',touchEnd)
    elements.heroes.addEventListener('mouseleave',touchEnd)
    elements.heroes.addEventListener('mousemove',touchMove)
                    }catch(error){

                    }
}

export function scrollSwipeComics(){
    try{
        //comics
    elements.comicsTrending.addEventListener('touchstart',touchStart)
    elements.comicsTrending.addEventListener('touchmove',touchMove)
    elements.comicsTrending.addEventListener('touchend',touchEnd)
    elements.comicsTrending.addEventListener('mousedown',touchStart)
    elements.comicsTrending.addEventListener('mouseup',touchEnd)
    elements.comicsTrending.addEventListener('mouseleave',touchEnd)
    elements.comicsTrending.addEventListener('mousemove',touchMove)

    }catch(error){

    }
}
