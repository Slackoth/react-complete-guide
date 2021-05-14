import React, { useCallback, useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = () => {
    // GET
    fetch('https://swapi.dev/api/films')
      .then(response => {
        return response.json()
      })
      .then(data => {
        const transformedMovies = data.results.map(movie => {
          return {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date
          }
        });
        
        setMovies(transformedMovies);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // We use useCallback() so that react memoize the function and treat it
  // as a new functio only when the dependencies change
  const shortFetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://react-http-689f4-default-rtdb.firebaseio.com/movies.json');

      if(!response.ok)
        throw new Error('Something went wrong...');

      const data = await response.json();
      const movies = [];

      for(let key in data) {
        let movie = data[key];

        movies.push({
          id: key,
          title: movie.title,
          openingText: movie.openingText,
          releaseDate: movie.releaseDate
        });
      }
      
      setMovies(movies);
    } catch (error) {
      setError(error.message);
    }
    
    setIsLoading(false)
  }, []);

  const addMovieHandler = async movie => {
    const response = await fetch('https://react-http-689f4-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();

    shortFetchMoviesHandler();
  };

  const contentHandler = () => {
    let content = <p>No movies found!</p>;

    if(movies.length > 0)
      content = <MoviesList movies={movies}/>;

    if(isLoading)
      content = <p>Loading...</p>;
    
    if(error)
      content = <p>{error}</p>;

    return content;
  };

  // Thanks to useCallback() we can declare the function as a dependency
  useEffect(() => {shortFetchMoviesHandler()}, [shortFetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={shortFetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {contentHandler()}
      </section>
    </React.Fragment>
  );
}

export default App;
