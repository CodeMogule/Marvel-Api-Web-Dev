import * as elements from './elements'

const loaderEle = `spinner`;

export function loader(){
    try{
    const spinner = `
    <i class="fas fa-circle-notch ${loaderEle}"></i>
    `
    elements.elements.forLoader.insertAdjacentHTML('afterbegin',spinner)
    }
    catch(error){

    }
}

export function removeLoader(){
    const loader = document.querySelector(`.${loaderEle}`)
    if (loader){
        loader.parentElement.removeChild(loader)
    }
}

