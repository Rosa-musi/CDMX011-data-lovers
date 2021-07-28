import { maping, sortAscending, sortDescending, sortAphabetic, sortWorst, filterData, peopleArray, charactersCard } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

let films = document.getElementById('films')
let data_films = data.films
let filterSort = data_films
const movies_button = document.getElementById('movies_button');
const home = document.getElementById('home')
const home_button = document.getElementById('home_button')
const selector = document.getElementById('selector')
const characters = document.getElementById('characters')
const characters_button = document.getElementById('characters_button')
const menuHamburguesa = document.getElementById('menuHamburguesa')
const menu = document.getElementById('menu')



menuHamburguesa.addEventListener('click', () =>{
    menu.classList.toggle('activated')
})


home_button.addEventListener('click', () => {
    home.style.display = "flex";
    films.style.display = "none";
    selector.style.display = "none";
    characters.style.display = "none"
})



movies_button.addEventListener('click', () => {
    let moviesMaped = maping(data_films)
    films.innerHTML = moviesMaped
    home.style.display = "none";
    films.style.display = "flex";
    selector.style.display = "flex";
    characters.style.display = "none"
})


const sortSelect = document.querySelector('.sortMovies')
sortSelect.addEventListener('change', (e) => {
    if (e.target.value === "alphabetic"){
        let sort = sortAphabetic(filterSort)
        let printMovies = maping(sort)
        films.innerHTML = printMovies
    } else if (e.target.value === "releaseAscending"){
        let sort = sortAscending(filterSort)
        let printMovies = maping(sort)
        films.innerHTML = printMovies
    } else if (e.target.value === "releaseDescending"){
        let sort = sortDescending(filterSort)
        let printMovies = maping(sort)
        films.innerHTML = printMovies
    } else if (e.target.value === "score") {
        let sort = sortWorst(filterSort)
        let printMovies = maping(sort)
        films.innerHTML = printMovies
        
    }
})

const filterSelect = document.querySelector('.filterMovies')
filterSelect.addEventListener('change', (event) => {
    if(event.target.value != "all"){        
        filterSort = filterData(data_films, event.target.value)
        let filtered = maping(filterSort)
        films.innerHTML = filtered
    } else {
        filterSort = data_films
        films.innerHTML = maping(filterSort)
    }
})

characters_button.addEventListener('click', () => {
    home.style.display = "none";
    films.style.display = "none";
    selector.style.display = "none";
    characters.style.display = "flex"
    let arrayPeople = peopleArray(data_films)
    let charactersPrint = charactersCard(arrayPeople)
    characters.innerHTML = charactersPrint
})
