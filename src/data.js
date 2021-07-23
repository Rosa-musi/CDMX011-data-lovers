// estas funciones son de ejemplo

export const maping = (data) => {
  let posters2 = []

  data.forEach(movie => {
      posters2 += `
      <div class="card_film"> 
      <div class="frontFaceCard">
        <div class="posterContainer">
          <img src=${movie.poster} class= "posterimg" alt="${movie.title}">
        </div>
        <h2>${movie.title}</h2>
        <div class ="movieDate">
          <p class="releaseDate"> Release date: <br> <span>${movie.release_date}</span></p>         
          <p class = "rate"> Score: <br> <span>${movie.rt_score}</span></p>
        </div>
      </div>
        <div class= "movie_info">
          <p class="director"> Director: ${movie.director} </p>
          <p class="producer"> Producer: ${movie.producer} </p>
          <p class="description"> Description: ${movie.description} </p>
        </div>
      </div>
      `
  })

  return posters2
};


const sortData = (data) => data.sort((a, b) => a.release_date > b.release_date ? 1 : -1)
export let sortAscending = (data) => sortData(data);
export const sortDescending = (data) => sortAscending(data).reverse();

export const sortAphabetic = (data) => data.sort((a,b) => a.title > b.title ? 1 : -1);

const sortRate = (data) => data.sort((a, b) => a.rt_score - b.rt_score);
export const sortWorst = (data) => sortRate(data);

export const filterData = (data, option) => {
  const filterDirector = data.filter((movie => movie.director === option));
  return filterDirector;
}

export function peopleArray (data) {
  let peopleArray = []
  for (let film of data) {
      for (let people of film.people)
      peopleArray.push(people);
  }
  return peopleArray
}

export const charactersCard = (data) => {
  let characters = []

  data.forEach(movie => {
      characters += `
      <div class="card_film"> 
        <div class="frontFaceCard">
          <div class="posterContainer">
            <img src=${movie.img} class= "posterimg" alt="${movie.name}">
          </div>
          <h2>${movie.name}</h2>
          <div class ="movieDate">
            <p class="releaseDate"> Specie <br> <span>${movie.specie}</span></p>         
          </div>
        </div>
      </div>
      `
  })
  return characters
};