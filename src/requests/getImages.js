import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
