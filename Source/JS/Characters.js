import axios from "axios";

async function getCharacters(){
    let key = `adfbe33f945bd7bbefc6420a1fe57e84`;
    try{
    const getRes = await axios(`http://gateway.marvel.com/v1/public/characters?apikey=${key}`)
    }
    catch(error){
        alert(error)
    }
}
getCharacters();