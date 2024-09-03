
const movies =[
  { "id": 1, "title": "Night Country", "poster_path": "assets/1.jpg" },
    { "id": 2, "title": "Starlight Adventure", "poster_path": "assets/2.jpg" },
    { "id": 3, "title": "Moonlight Serenade", "poster_path": "assets/3.jpg" },
    { "id": 4, "title": "Sunset Dreams", "poster_path": "assets/4.jpg" },
    { "id": 5, "title": "Ocean Symphony", "poster_path": "assets/5.jpg" },
    { "id": 6, "title": "Mountain Magic", "poster_path": "assets/6.jpg" },
    { "id": 7, "title": "Skyline Reverie", "poster_path": "assets/7.jpg" },
    { "id": 8, "title": "Enchanted Forest", "poster_path": "assets/8.jpg" },
    { "id": 9, "title": "Mystical Journey", "poster_path": "assets/9.jpg" },
    { "id": 10, "title": "Whispering Winds", "poster_path": "assets/10.jpg" },
    { "id": 11, "title": "Eternal Sunshine", "poster_path": "assets/11.jpg" },
    { "id": 12, "title": "Secret Garden", "poster_path": "assets/12.jpg" },
    { "id": 13, "title": "Hidden Treasures", "poster_path": "assets/13.jpg" },
    { "id": 14, "title": "City Lights", "poster_path": "assets/14.jpg" },
    { "id": 15, "title": "Desert Mirage", "poster_path": "assets/15.jpg" },
    { "id": 16, "title": "Snowflake Symphony", "poster_path": "assets/16.jpg" },
    { "id": 17, "title": "Firefly Serenade", "poster_path": "assets/17.jpg" },
    { "id": 18, "title": "Golden Horizon", "poster_path": "assets/18.jpg" },
    { "id": 19, "title": "Crimson Sky", "poster_path": "assets/19.jpg" },
    { "id": 20, "title": "Majestic Waterfall", "poster_path": "assets/20.jpg" },
    { "id": 21, "title": "Sunrise Sonata", "poster_path": "assets/21.jpg" },
    { "id": 22, "title": "Twilight Symphony", "poster_path": "assets/22.jpg" },
    { "id": 23, "title": "Sapphire Seas", "poster_path": "assets/23.jpg" },
    { "id": 24, "title": "Echoes of Eternity", "poster_path": "assets/24.jpg" },
    { "id": 25, "title": "Celestial Harmony", "poster_path": "assets/25.jpg" },
    { "id": 26, "title": "Diamond Skies", "poster_path": "assets/26.jpg" },
    { "id": 27, "title": "Aurora Borealis", "poster_path": "assets/27.jpg" },
    { "id": 28, "title": "Lunar Reflection", "poster_path": "assets/28.jpg" },
    { "id": 29, "title": "Starry Night", "poster_path": "assets/29.jpg" },
    { "id": 30, "title": "Silver Lining", "poster_path": "assets/30.jpg" },
    { "id": 31, "title": "Azure Skies", "poster_path": "assets/31.jpg" },
    { "id": 32, "title": "Whimsical Wonderland", "poster_path": "assets/32.jpg" },
    { "id": 33, "title": "Autumn Serenade", "poster_path": "assets/33.jpg" },
    { "id": 34, "title": "Cerulean Seascape", "poster_path": "assets/34.jpg" },
    { "id": 35, "title": "Maple Melody", "poster_path": "assets/35.jpg" },
    { "id": 36, "title": "Crimson Leaves", "poster_path": "assets/36.jpg" },
    { "id": 37, "title": "Midnight Magic", "poster_path": "assets/37.jpg" },
    { "id": 38, "title": "Whispering Pines", "poster_path": "assets/38.jpg" },
    { "id": 39, "title": "Rustic Retreat", "poster_path": "assets/39.jpg" },
    { "id": 40, "title": "Emerald Enchantment", "poster_path": "assets/40.jpg" },
    { "id": 41, "title": "Velvet Twilight", "poster_path": "assets/41.jpg" },
    { "id": 42, "title": "Amber Oasis", "poster_path": "assets/42.jpg" },
    { "id": 43, "title": "Ivory Illusion", "poster_path": "assets/43.jpg" },
    { "id": 44, "title": "Topaz Tranquility", "poster_path": "assets/44.jpg" },
    { "id": 45, "title": "Magenta Moonlight", "poster_path": "assets/45.jpg" },
    { "id": 46, "title": "Sable Skyline", "poster_path": "assets/46.jpg" },
    { "id": 47, "title": "Cotton Candy Clouds", "poster_path": "assets/47.jpg" },
    { "id": 48, "title": "Royal Rainbow", "poster_path": "assets/48.jpg" },
    { "id": 49, "title": "Jade Jungle", "poster_path": "assets/49.jpg" },
    { "id": 50, "title": "Golden Gate", "poster_path": "assets/50.jpg" }
]
for (let i=0; i<3; i++){
  document.getElementById(jsonMovies[i].id).src=jsonMovies[i].
  poster_path;
  
}
  function searchMovies(){
    let input = document.getElementById("input").value.toLowerCase();
 let foundMovie= movies.find((movie) => movie.title.toLowerCase() === input);
    if (searchMovie) {
      document.getElementById("result").innerText = "Pronađen je vaš film: " + foundMovie.title;
    } else {
      document.getElementById("result").innerText = "Film nije pronađen.";
    }
  }
  //napiranje niza
  const nizNaslova = jsonMovies.map(movie => movie.id);
  console.log(nizNaslova);

//Zadaca 11
 let element =document.createElement('p');
Element.innerText = "Hello, World!";
document.body.appendChild(noviElement);
//Drugi zadatak
let el = document.querySelector('p');
element.remove();
//ZAdatak 3
let doc= document.querySelector('h1');
element.innerText = "New Heading";
//Zadatak 4
let elem=document.querySelector('div');
element.classList.add('new-class');
//ZAdatak 5
let docu=document.querySelector('div');
element.classList.remove('old-class');
//ZAdatak 6
let eleme=document.querySelector('div');
element.style.backgroundColor = "blue";
//Zadatak 7
let novo=document.createElement('li');
novo.innerText = "New Item";
document.querySelector('ul').appendChild(novo);
//Zadatak 8
let slika=document.querySelector('img');
element.setAttribute('src', 'image.jpg');
