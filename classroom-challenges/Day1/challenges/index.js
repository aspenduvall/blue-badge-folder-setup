/*
- CHALLENGE

With the given array of username, build an input field that takes on a username and a button that fires off a search functionality filtering through the usernames in the username array. If the username exists, display it to the DOM in a p tag (You may build the p tag in your html file). 
Goals: build an input field and button that fire off a search functionality. The search functionality will filter through each username. If that username exists display it on the screen. 
Bonus: Have the search functionality NOT case sensitive.

let username = ["technoKid997", "heyGurl94", "taebae55", "witchita"];

*/

// SEARCH FORM
const searchForm = document.querySelector('form');
const searchBar = document.querySelector('.username');
const submitButton = document.querySelector('submit');
let username = ["technoKid997", "heyGurl94", "taebae55", "witchita"];

searchForm.addEventListener('submit', results);

function results() {
    preventDefault();
    if (searchBar == username) {
        let article = document.createElement('article');
        let answer = document.createElement('p');

        answer.innerText = username[searchBar];

        article.appendChild(answer);
    }
}

results();