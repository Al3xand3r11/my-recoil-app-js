import './App.css';
import React, {useEffect} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { movies as moviesAtom, view as viewAtom} from './Components/atoms';
import Menu from './Components/Menu';

function App() {
  const [movies, setMovies] = useRecoilState(moviesAtom);
  const view = useRecoilValue(viewAtom)
  useEffect(() => {
    const getMovies = async () => {
      const url = `https://api.themoviedb.org/3/trending/movie/${view}?api_key=02dbfb1ad973a3edfa76104ad041a875`;
      const resp = await fetch(url);
      const body = await resp.json();
      setMovies(Object.assign({}, movies, {
        [view]: body,
      }));
    };

    getMovies();
  }, [movies, setMovies, view]);

return <>
    <Menu/>
    {movies[view].results?.map((movie) => (
  <div key={movie.url}>
    <a href={movie.url}>
      {movie.title} / {movie.vote_average}
    </a>
    <div> {movie.overview} </div>
  </div>
))}
   </> 
};

export default App;
