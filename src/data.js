// estas funciones son de ejemplo

export const maping = (data) => {
  let posters2 = []

  data.films.forEach(movie => {
      posters2 += `
        <div class="card_film">
            <img src=${movie.poster}>
            <h2>${movie.title}</h2>
        </div>
      `
  })
  return posters2
};


export const AlphabeticalOrderSort = (data) => {
  let result = data.films.sort((a, b) => {
    const titleA = a.title.toLowerCase()
    const titleB = b.title.toLowerCase()
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1
    } else{
      return 0;
    }
  })
  return result
} 

export const sortData = (data ) => {
   const sortRelease = data.films.sort((a,b) => (a.release_date > b.release_date ? 1 : -1)); 
  return sortRelease;
  
} 
  