import { maping, sortAscending, sortDescending, sortAphabetic, sortWorst } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

var films = document.getElementById('films')
let data_films = data.films
const movies_button = document.getElementById('movies_button');
const home = document.getElementById('home')
const home_button = document.getElementById('home_button')
const selector = document.getElementById('selector')




home_button.addEventListener('click', () => {
    home.style.display = "block";
    films.style.display = "none";
    selector.style.display = "none";
})



movies_button.addEventListener('click', () => {
    let moviesMaped = maping(data_films)
    films.innerHTML = moviesMaped
    home.style.display = "none";
    films.style.display = "flex";
    selector.style.display = "flex";
})



const sortSelect = document.querySelector('.sortMovies')
sortSelect.addEventListener('change', (e) => {
    if (e.target.value === "alphabetic"){
        let sort = sortAphabetic(data_films)
        let sorted = maping(sort)
        films.innerHTML = sorted
    } else if (e.target.value === "releaseAscending"){
        let sort = sortAscending(data_films)
        let sorted = maping(sort)
        films.innerHTML = sorted
    } else if (e.target.value === "releaseDescending"){
        let sort = sortDescending(data_films)
        let sorted = maping(sort)
        films.innerHTML = sorted
    } else if (e.target.value === "score") {
        let sort = sortWorst(data_films)
        let sorted = maping(sort)
        films.innerHTML = sorted
    }
})



