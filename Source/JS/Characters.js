import axios from "axios";
import { elements } from "./elements";

export class Characters{
    constructor(){
     
    }

    

    async getCharacters(){
        try{
        const getRes = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=adfbe33f945bd7bbefc6420a1fe57e84&hash=36d9c6c7b4db64ac4ca23f0fa90cdb40`)
        this.dataResult = getRes.data.data.results
        this.dataResult.slice(0,10).forEach((cur)=>{
          const u = `/portrait_fantastic.`;
          let markup  = `
          <li><img src="${cur.thumbnail.path}${u}${cur.thumbnail.extension}" alt="">
            <a href="">
              <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 230 46" style="width: 100%;" class="border-design">
                <defs>
                  <style>.cls-1{fill:none;}.cls-2,.outline-1{opacity:0.5;}.cls-3,.outline-2,.cls-5{fill:#fff;}.cls-3{opacity:0.08;}.cls-4,.cls-6{fill-rule:evenodd;}.cls-6{fill:url(#IJ2);}.cls-7{opacity:0.2;} .bg{fill:rgba(0,0,0,0.5)}</style>
                  <pattern id="IJ2" data-name="IJ2" width="20" height="20" patternTransform="translate(-117 195)" patternUnits="userSpaceOnUse" viewBox="0 0 20 20">
                    <rect class="cls-1" width="20" height="20"></rect>
                    <rect class="cls-2" width="20" height="20"></rect>
                    <rect class="cls-3" width="1" height="20"></rect>
                    <rect class="cls-3" width="20" height="1"></rect>
                    <polygon class="cls-3" points="1 20.71 0.29 20 20 0.29 20.71 1 1 20.71"></polygon>
                    <polygon class="cls-3" points="-19 20.71 -19.71 20 0 0.29 0.71 1 -19 20.71"></polygon>
                    <polygon class="cls-3" points="1 0.71 0.29 0 20 -19.71 20.71 -19 1 0.71"></polygon>
                    <polygon class="cls-3" points="-19 0.71 -19.71 0 0 -19.71 0.71 -19 -19 0.71"></polygon>
                  </pattern>
                </defs>
                <title>slim-btn-dn-new</title><g id="Layer_2" data-name="Layer 2">
                  <g id="slim-btn-dn-new">
                    <g id="BG" class="cls-2">
                      <polygon class="bg" points="0 0 230 0 184 46 46 46 0 0"></polygon>
                    </g>
                    <g id="OUTLINE" class="outline-1">
                      <path class="outline-2" d="M227.59,1l-44,44H46.41L2.41,1H227.59M230,0H0L46,46H184L230,0Z"></path>
                    </g>
                  </g>
                  </g>
                  
              </svg>
              <h3>${cur.name}</h3>
            </a>
            </li>
          `
          elements.heroes.insertAdjacentHTML('beforeend',markup)
        })
        }
        catch(error){
            alert(error)
        }
      }
}



