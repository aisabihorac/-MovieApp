"use strict";

const apiKey = "80b072d8f2331c1f770690aee2833931";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer yJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGIwNzJkOGYyMzMxYzFmNzcwNjkwYWVlMjgzMzkzMSIsIm5iZiI6MTcyNjk5ODY5My45ODY5NzcsInN1YiI6IjY2ZTMyY2YxZjQ2N2MyYWQ2MmY5MjFhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wt0ljvMDua5hgNAgqzCCTT793ycjX6wlaDz5chDXC2E"
  }
};

const popularURL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`;

const imageURL = "https://image.tmdb.org/t/p/original/";
fetch(popularURL, options)
  .then((response) => response.json())
  .then((data) => {
    const popularMovies = data.results;
    for (let i = 1; i <= 3; i++) {
      document.getElementById(i).src = imageURL + popularMovies[i].poster_path;
    }
  });

const loadImg = document.createElement("img");
loadImg.src = "assets/loading.gif";
loadImg.height = 60;

function searchMovies() {
  document.getElementById("search-div").appendChild(loadImg);

  setTimeout(findMovie, 1000);
}

function findMovie() {
  let searchWord = document.getElementById("input").value.toLowerCase();
  const searchURL = `https://api.themoviedb.org/3/search/movie?query=%22${searchWord}%22&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;

  fetch(searchURL, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      const sviPronadeniFilmovi = data.results;
      if (sviPronadeniFilmovi.length === 0) {
        document.getElementById("result").innerText = "Film nije pronađen.";
      } else {
        sviPronadeniFilmovi.forEach((film) => {
          console.log(film);
          let filmImage = "";
          if (film.backdrop_path === null) {
            filmImage = "assets/movie-icon.png";
          } else {
            filmImage = imageURL + film.backdrop_path;
          }

          const karticaFilma = `<div class="card m-4">
          <div class="card-header">
        <div class="card-body">
          <img src="${filmImage}" height="100 px">
        <p>${film.title}</p>
        <p>${film.release_date}</p>
      </div>
        </div>`;

          document.getElementById("result").innerHTML += karticaFilma;
        });
      }
    });

  document.getElementById("search-div").removeChild(loadImg);
}


//Lekcija 19
//Nasljeđivanje sa extend
class Animal {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  writeDetails() {
    console.log("Animal height is:", this.height);
  }

  speak() {
    console.log("Animal make noises");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog say awaw");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Cat says mjau");
  }
}

let vucijak = new Dog("vucijak", 90, 60);
vucijak.speak();
