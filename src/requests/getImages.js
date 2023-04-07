import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios 
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
          const imageResults = response.data.collection.items;
          const parsedImages = imageResults.filter(result => result.data[0].media_type === "image");
          const images = parsedImages.map(image => image.links[0].href);
          // console.log (images);
          return images
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

export default getImages;
