
"use strict";

const apiKey = "9cdde993d411dfddd56de7c3765e3e32";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2RkZTk5M2Q0MTFkZmRkZDU2ZGU3YzM3NjVlM2UzMiIsIm5iZiI6MTcyNjk5NzcwNC4wOTY5NTIsInN1YiI6IjU5ZTI1YWM0YzNhMzY4N2MwNTAwMjI5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sv27-s-KY4DwrCSotF7h1d3FKf5tRn98YodfDGsFQpA"
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
