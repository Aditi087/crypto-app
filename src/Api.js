// export const coinNewsUrl = `https://coinranking1.p.rapidapi.com/markets`;
// export const coinSearchUrl = `https://coinranking1.p.rapidapi.com/search-suggestions`;

import axios from "axios";



export const API_URL = "https://coinranking1.p.rapidapi.com";
export const ApiHelperFunction = async (data) => {
  const { urlPath, method } = data;
  var config = {
    method: `${method}`,
    url: `${API_URL}${urlPath}`,
    
    headers: {
      // "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "7cdbf679fdmsh13b0fd90310e1d5p1d408cjsnb72bacfa7b54",
    },
  };
  let responseData = "";
  await axios(config)
    .then(function (response) {
      responseData = response;
    })
    .catch(function (error) {});
  return responseData;
};




export const API_URL1 = "https://coinranking1.p.rapidapi.com";
export const ApiHelperFunction1 = async (data) => {
  const { urlPath, method } = data;
  var config = {
    method: `${method}`,
    url: `${API_URL1}${urlPath}`,
    
    headers: {
      // "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      'x-rapidapi-key': '7cdbf679fdmsh13b0fd90310e1d5p1d408cjsnb72bacfa7b54'
    },
  };
  let responseData = "";
  await axios(config)
    .then(function (response) {
      responseData = response;
    })
    .catch(function (error) {});
  return responseData;
};
