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

let users = [
    new User(1, "admin", "admin", "admin@movies.com", [], "1234")
];

function login() {
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;

    let userFound = false;
    let correctPassword = false;

    users.forEach(user => {
        if (user.email === email) {
            userFound = true;
            console.log("Pronađen user", user);
            if (user.password === password) {
                correctPassword = true;
                console.log("Password je ok");
            }
        }
    });


    if (userFound && correctPassword) {
        document.getElementById("message").innerText = "Successful log in";
        document.getElementById("message").style.color = "green";
        document.getElementById("message").style.fontWeight = "bold";
        console.log("Successful log in");
        let form=document.getElementById("form")
    } else {
        document.getElementById("message").innerText = "Incorrect email or password";
        document.getElementById("message").style.color = "red";
        document.getElementById("message").style.fontWeight = "bold";
        console.log("Incorrect email or password");
    }
}

function signUp() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const oldUser = users.find(user => user.email === email);

    if (oldUser !== undefined) {
        console.log("User already exists");
        document.getElementById("message").innerText = "User already exists"; 
        document.getElementById("message").style.color = "red";
        document.getElementById("message").style.fontWeight = "bold";
    } else {
        const newUser = new User(users.length + 1, firstName, lastName, email, [], password);

        users.push(newUser);
        console.log("New user added:", newUser);
        document.getElementById("message").innerText = "Successful sign up"; 
        document.getElementById("message").style.color = "green";
        document.getElementById("message").style.fontWeight = "bold";
    }
}
