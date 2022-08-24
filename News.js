const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "28361e09abmsh182842238f2a74ap1c1164jsn9a73c020fa93",
    "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
  },
};

fetch("https://cricbuzz-cricket.p.rapidapi.com/news/v1/index", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
