"use strict";
class User {
    constructor(id, ime, prezime, email, favMovies, password) {
      this.id = id;
      this.ime = ime;
      this.prezime = prezime;
      this.email = email;
      this.favMovies = favMovies;
      this.password = password;

    }
  
    
  }

  

  let users=[
    new User(1,"admin","admin","admin@movies.com",[],"1234")
  ];
  function   login(){
    const password=document.getElementById("password").value;
    const email=document.getElementById("email").value;
    users.forEach(user=>{
        if(user.email==email){
            console.log("pronaden user",user);
            if(user.password==password){
                console.log("pasword je ok")
            }
        }
        else{
            console.log("nije pronaden");
        }
    })
}