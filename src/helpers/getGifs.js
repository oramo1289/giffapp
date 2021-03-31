

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=8PWcEszlo7Rhy629Sjcxh7aenTeGDoyx&limit=10&q=${encodeURI(category)}`;
    const res = await fetch( url );
    const {data} = await res.json();

    const gifs = data.map(({id, title, images }) => {
        return {
            id,
            title,
            url: images?.downsized_medium.url
        }
    })
    
    return gifs;

}