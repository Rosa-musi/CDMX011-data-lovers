import { maping, sortDataD } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

var films = document.getElementById('films')
const movies_button = document.getElementById('movies_button');
const home = document.getElementById('home')
const home_button = document.getElementById('home_button')
const ascendente = document.getElementById('ascendente')
const sortButton = document.getElementById('sortButton');
const sortOptions = document.getElementById('sortOptions');



home_button.addEventListener('click', () => {
    home.style.display = "block";
    films.style.display = "none";
})

let moviesMaped = maping(data)
films.innerHTML = moviesMaped

movies_button.addEventListener('click', () => {
    home.style.display = "none";
    films.style.display = "flex";
})

console.log(typeof(moviesMaped))

sortButton.addEventListener('click', () => {
    sortOptions.style.display = "flex"
})


let sort = sortDataD(data)

console.log(sort)
