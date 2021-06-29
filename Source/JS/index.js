import { Slider } from "./slider";
import * as character from './Characters';
import { elements } from "./elements";
import * as loaders from './loader';
import * as comics from './comics';
import * as search from './search';
import * as swipe from './swiper';

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
    try{
     if(scrollCounter <= elements.heroes.scrollWidth - elements.heroes.clientWidth){
        elements.heroes.scrollTo({
            top:0,
            left:(scrollCounter+=scrollPer),
            behavior: 'smooth'
        })
    } }catch(error){

    } try{
        if(scrollCounter <= elements.comicsTrending.scrollWidth - elements.comicsTrending.clientWidth){
         elements.comicsTrending.scrollTo({
            top:0,
            left:(scrollCounter+=scrollPer),
            behavior: 'smooth'
         })
     } }
      catch(error){

      }
 }

 window.scrollLeftz = function(){
     try{
   elements.heroes.scrollTo({
       top:0,
       left:(scrollCounter-=scrollPer),
       behavior: 'smooth'
   })
} catch(error){

}

try{
   elements.comicsTrending.scrollTo({
    top:0,
    left:(scrollCounter-=scrollPer),
    behavior: 'smooth'
   })
}catch(error){
    
}

   if(scrollCounter < 0){
       scrollCounter = 0
   }
}
 let scrollPer = 400;

 

 const getSearchResult = async() => {
 let inputText = elements.searchText.value
 console.log(inputText)
    placeStorage(inputText) 
    loaders.loader()
    let query = window.sessionStorage.getItem('query')   
    await search.getSearch(query)
    loaders.removeLoader()
 }
 
 try{
elements.searchBox.addEventListener('submit', (event) => {
   getSearchResult()
     event.preventDefault()
 })} catch(error){

 }


 const  characterResult = async () => {
//spinner
loaders.loader()
//display characters both for the home and the characters page
get.getCharacters()
await get.displayHeroes()
//clear Loader
loaders.removeLoader()
 }

 const ComicsResult = async () => {
     //display Comics
     await comics.getComics()
 }

 const characterInfo = async () => {
     await get.getSingleCharacter()
 }

 const characterComics = async () => {
     await get.getSingleComics()
 }

 const comicInfo = async () => {
     await comics.comicsSingle()
 }


  function test11(){
     console.log(111)
 }

 swipe.startTouch();

//characterResult()
 //ComicsResult()
//characterInfo();
//characterComics();
//comicInfo();






  
 
