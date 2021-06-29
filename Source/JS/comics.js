import axios from 'axios'
import { elements } from './elements';

export async function getComics(){
    try{
    let comicRes = await axios(`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=adfbe33f945bd7bbefc6420a1fe57e84&hash=36d9c6c7b4db64ac4ca23f0fa90cdb40`)
    let comicData = comicRes.data.data.results;
    const url = `/portrait_fantastic.`
    comicData.forEach((comics) => { 

        //creators names
        const p = comics.creators.items.slice(0,1).map((names)=>{
            return `<p>${names.name}</p>`
        }).join("")

        //prices
        const prices = comics.prices.map((cost) => {
            return `<p>$${cost.price}</p>`
        }).join("")

        let comicMarkup = `
        <li>
                        <a onclick = "getComicsId(${comics.id})">
                            <img src="${comics.thumbnail.path}${url}${comics.thumbnail.extension}" alt="">
                        </a>
                            <h3> ${comics.title} </h3>
                           ${p}
                           ${prices}
                </ul>
        `
        elements.comicsTrending.insertAdjacentHTML('afterbegin',comicMarkup);
        
    })
} catch(error){

}
}

export async function comicsSingle(){
    try{
   let comicId = sessionStorage.getItem('comicId')
   const getResultComic = await axios(`https://gateway.marvel.com/v1/public/comics/${comicId}?ts=1&apikey=adfbe33f945bd7bbefc6420a1fe57e84&hash=36d9c6c7b4db64ac4ca23f0fa90cdb40`);
   let comicsData = getResultComic.data.data.results;
   const url = `/portrait_fantastic.`
   comicsData.forEach((item) => {
         //creators names
         const creator = 
         item.creators.items.slice(0,1).map((names)=>{
            return `<span>${names.name}</span>`
        }).join("")

        //prices
        const prices = item.prices.slice(0,1).map((cost) => {
            return `<span>$${cost.price}</span>`
        }).join("")

 if(creator === ""){
           const markup = `<div class="description-container">         
           <h1>${item.title}</h1>
           <p>${item.description}</p>
           <p>Price: ${prices} </p>
           <p>Creator: not Available</p>
       </div>`

       elements.comicInfo.insertAdjacentHTML('beforeend',markup)
         } else{
             console.log(`not`)
         }
      
       const markup = ` 
       <a href="./index.html"><h6><i class="fas fa-arrow-left"></i> Home</h6></a>
        <div class="img-container">
            <img src="${item.thumbnail.path}${url}${item.thumbnail.extension}" alt="">
        </div>

        <div class="description-container">         
            <h1>${item.title}</h1>
            <p>${item.description}</p>
            <p>Price: ${prices} </p>
            <p>Creator: ${creator}</p>
        </div>
       `

       elements.comicInfo.insertAdjacentHTML('beforeend',markup)
       

   })
}catch(error){

}
}


window.getComicsId = function(id){
    window.sessionStorage.setItem('comicId',id);
    window.location = 'comicinfo.html';
    return false;
}