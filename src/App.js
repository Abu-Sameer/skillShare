import { useEffect, useState } from 'react';
import './App.css';
import Movie from './component/Movie';

const Api = 'http://omdbapi.com?apikey=a7e52c3f';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState();

  const search = async (title) => {
    const response = await fetch(`${Api}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  function handleSearch(e) {
    setSearchMovies((prev) => (prev = e.target.value));
  }

  function handSubmit(e) {
    e.preventDefault();
    search(searchMovies);
  }

  useEffect(() => {
    search('hai');
  }, []);

  const moviesElement = movies.map((movieItem, index) => {
    return <Movie key={index} save={movieItem} />;
  });

  return (
    <div className="App">
      <div className="header">
        <h1>Movies world</h1>
        <div className="search">
          <form onSubmit={handSubmit}>
            <input
              placeholder="Search for your movies"
              value={searchMovies}
              onChange={handleSearch}
              autoFocus
              required
            />
          </form>
          <i onClick={handSubmit} className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div>
        {movies.length > 0 ? (
          <div className={'movie-container'}>{moviesElement}</div>
        ) : (
          <h1 className="empty">No Movies Found</h1>
        )}
      </div>
    </div>
  );
}

export default App;
