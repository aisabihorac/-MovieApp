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
        console.log("Successful log in");
        document.getElementById("form").style.visibility = "hidden";
    } else {
        document.getElementById("message").innerText = "Incorrect email or password";
        console.log("Incorrect email or password");
    }
}

function signUp() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const oldUser = users.find(user => user.email === email);
    debugger;
    if (oldUser !== undefined) {
        document.getElementById("message").innerHTML = "User already exists";
    } else {
        const newUser = new User(users.length + 1, firstName, lastName, email, [], password);

        users.push(newUser);
        document.getElementById("message").innerHTML = "Account created";

    }
}
