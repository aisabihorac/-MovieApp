let movies = [
    { id: 1, title: "Night country", poster_path: "assets/1.jpg" },
    { id: 2, title: "Lift", poster_path: "assets/2.jpg" },
    { id: 3, title: "Boy in the boat", poster_path: "assets/3.jpg" },
  ];
  function searchMovie() {
    let input = document.getElementById("input").value.toLowerCase();
 let foundMovie= movies.find((movie) => movie.title.toLowerCase() === input);
    if (searchMovie) {
      document.getElementById("result").innerText = "Pronađen je vaš film: " + foundMovie.title;
    } else {
      document.getElementById("result").innerText = "Film nije pronađen.";
    }
  }