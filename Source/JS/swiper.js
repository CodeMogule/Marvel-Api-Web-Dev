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
    elements.slider.forEach((slider,index) => {
        const slideImg = slider.querySelector('img')
        window.swipe = new Slider()
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
} 



window.contentMenu = function(e){
    e.preventDefault();
    e.stopPropagation()
    return false
}

function grabPositionX(event) {
    return event.type.includes('mouse')? event.pageX : event.touches[0].clientX
}
