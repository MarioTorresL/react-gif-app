export const getGiffs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=wO7Gme8lPmHjdtcWEzBMhnMAQ4QSGbP2&q=${category}&limit=12`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((resp) => ({
    id: resp.id,
    title: resp.title,
    url: resp.images.downsized_medium.url,
  }));

  return gifs;
};
