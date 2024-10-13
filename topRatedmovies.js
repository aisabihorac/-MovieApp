'use strict';

let page = 0;
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
function loadMore() {
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