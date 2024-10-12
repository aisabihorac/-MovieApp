'use strict';

const apiKey = "80b072d8f2331c1f770690aee2833931";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer yJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGIwNzJkOGYyMzMxYzFmNzcwNjkwYWVlMjgzMzkzMSIsIm5iZiI6MTcyNjk5ODY5My45ODY5NzcsInN1YiI6IjY2ZTMyY2YxZjQ2N2MyYWQ2MmY5MjFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wt0ljvMDua5hgNAgqzCCTT793ycjX6wlaDz5chDXC2E"
  }
};
let page=0;
const imageURL = "https://image.tmdb.org/t/p/original/";
 let topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}1&api_key=${apiKey}`

fetch(topRatedURL, options).then(response => response.json()).then(data => {
    page++;
    const topRatedMovies = data.results;
    topRatedMovies.forEach(item => {
        const filmPosterURL = imageURL + item.poster_path;
        const itemHTML = `<img src="${filmPosterURL}" height="250px" class="m-1">`;
        document.getElementById("movies-container").innerHTML += itemHTML;
     
    });
});
function loadMore(){
    topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}1&api_key=${apiKey}`
    fetch(topRatedURL, options).then(response => response.json()).then(data => {
        page++;
        debugger;
        const topRatedMovies = data.results;
        topRatedMovies.forEach(item => {
            const filmPosterURL = imageURL + item.poster_path;
            const itemHTML = `<img src="${filmPosterURL}" height="250px" class="m-1">`;
            document.getElementById("movies-container").innerHTML += itemHTML;
        });
    });


}