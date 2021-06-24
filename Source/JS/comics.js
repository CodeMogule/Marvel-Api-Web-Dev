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
                        <a href="">
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
