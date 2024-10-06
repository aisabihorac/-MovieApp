'use strict';

const imageURL = "https://image.tmdb.org/t/p/original/";
const topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`
fetch(topRatedURL, options).then(response => response.json()).then(data => {
    console.log(data);
    const topRatedMovies = data.results;
    topRatedMovies.forEach(item => {
        const filmPosterURL = imageURL + item.poster_path;
        const itemHTML = `<img src="${filmPosterURL}" height="250px" class="m-1">`;
        document.getElementById("movies-container").innerHTML += itemHTML;
    });
});
