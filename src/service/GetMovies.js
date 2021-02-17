
const apiKey = '495a9f44'

export default function getMovies(keyword) {// el valor defecto sea un objeto vacio, si no llega nada sera morty
    const urlApi = `https://omdbapi.com/?s=${keyword}&apikey=${apiKey}`
    //console.log(urlApi)
    fetch (urlApi)
      .then(res => res.json())
      .then(response =>{        
          //console.log(response)
        const {Search} = response
        // const result = Search.map(peli => {
        //     const {Year, Title,Poster, Type} = peli
        //     return {Year, Title,Poster, Type}
        // });
        //const {Genre,Year, Title,Poster, Actors} = response            
            //console.log({title});
        //return {Genre,Year, Title,Poster, Actors}
        console.log(Search)
        return Search
        //console.log(gifs);    
      })
      .catch((error) => console.log(error))
}