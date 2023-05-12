import './App.css';
import React, {useEffect} from 'react';
import { atom, useRecoilState } from 'recoil';

const moviesState = atom({
  key: "movies",
  default: [],
});

function App() {
  const [movies, setMovies] = useRecoilState(moviesState);
  useEffect(() => {
    const getMovies = async () => {
      const url = "https://api.themoviedb.org/3/trending/all/day?api_key=02dbfb1ad973a3edfa76104ad041a875";
      const resp = await fetch(url);
      const body = await resp.json();
      setMovies(body);
    };

    getMovies();
  }, [setMovies]);

return movies.results?.map((movie) => (
  <div key={movie.url}>
    <a href={movie.url}>
      {movie.title}
    </a>
  </div>
)); 
}

export default App;
