// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js'
export const ghibliMovies = data.films.map(data => [`${data.title} ${data.poster} ${data.description}`]);

  
//};

export const anotherExample = () => {
  return 'OMG';
};
