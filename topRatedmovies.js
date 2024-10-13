'use strict';

const apiKey = "9cdde993d411dfddd56de7c3765e3e32";
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2RkZTk5M2Q0MTFkZmRkZDU2ZGU3YzM3NjVlM2UzMiIsIm5iZiI6MTcyNjk5NzcwNC4wOTY5NTIsInN1YiI6IjU5ZTI1YWM0YzNhMzY4N2MwNTAwMjI5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sv27-s-KY4DwrCSotF7h1d3FKf5tRn98YodfDGsFQpA"
    }
};

let page = 1;
const imageURL = "https://image.tmdb.org/t/p/original/";
let topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=${apiKey}`
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
    topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}&api_key=${apiKey}`;
    fetch(topRatedURL, options).then(response => response.json()).then(data => {
        page++;
        const topRatedMovies = data.results;
        topRatedMovies.forEach(item => {
            const filmPosterURL = imageURL + item.poster_path;
            const itemHTML = `<img src="${filmPosterURL}" height="250px" class="m-1">`;
            document.getElementById("movies-container").innerHTML += itemHTML;
        });
    });
}