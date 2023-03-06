export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?apikey=WV2fVVyHU4bc2FAxPz3psFKYUbfC91he&q=${category}&limit=6`
    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = data.map( img =>(
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ));

    console.log(gifs);
    return gifs;
}
