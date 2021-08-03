import { maping, sortAscending, sortDescending, sortAphabetic, sortWorst, filterData, peopleArray, charactersCard, filterDataCharacters, score, computeStats } from './data.js';


import data from './data/ghibli/ghibli.js';

let data_films = data.films
let filterSort = data_films
const menu = document.getElementById('menu')
const menuHamburguesa = document.getElementById('menuHamburguesa')
const home = document.getElementById('home')
const home_button = document.getElementById('home_button')
const averageResult = document.getElementById('averageResult');
const films = document.getElementById('films')
const movies_button = document.getElementById('movies_button');
const sortSelect = document.querySelector('.sortMovies')
const filterSelect = document.querySelector('.filterMovies')
const selector = document.getElementById('selector')
//const thirdPage = document.getElementById('thirdPage')
const characters_button = document.getElementById('characters_button')
const characters = document.getElementById('characters')
const filterCharacters = document.querySelector('.filterCharacters')







menuHamburguesa.addEventListener('click', () =>{
    menu.classList.toggle('activated');
})


home_button.addEventListener('click', () => {
    home.style.display = "flex";
    films.style.display = "none";
    selector.style.display = "none";
    filterCharacters.style.display = "none";
    characters.style.display = "none";
    menu.classList.toggle('activated');
})

let scoreArray = score(data_films);
averageResult.innerHTML = computeStats(scoreArray);


movies_button.addEventListener('click', () => {
    let moviesMaped = maping(data_films)
    films.innerHTML = moviesMaped
    home.style.display = "none";
    films.style.display = "flex";
    selector.style.display = "flex";
    filterCharacters.style.display = "none";
    characters.style.display = "none";
    menu.classList.toggle('activated');
})



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


let arrayPeople = peopleArray(data_films)

characters_button.addEventListener('click', () => {
    home.style.display = "none";
    films.style.display = "none";
    selector.style.display = "none";
    filterCharacters.style.display = "flex";
    characters.style.display = "flex";
    let charactersPrint = charactersCard(arrayPeople)
    characters.innerHTML = charactersPrint
    menu.classList.toggle('activated');
})


filterCharacters.addEventListener('change', (event) => {
    if(event.target.value != "all"){        
        let filter = filterDataCharacters(arrayPeople, event.target.value)
        let filtered = charactersCard(filter)
        characters.innerHTML = filtered
    } else {
        characters.innerHTML = charactersCard(arrayPeople)
    }
})


