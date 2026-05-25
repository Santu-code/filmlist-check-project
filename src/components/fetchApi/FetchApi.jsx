import React from 'react'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import CardDetail from '../cardDetail/CardDetail.jsx'
import '../../css/FetchApi.css'

export const FetchApi = () => {

    const [movieList, setMovieList]= useState([]);
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const [selectMovie, setSelectMovie] = useState(null);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=2`) 
        .then(response => response.json())
        .then(movies => setMovieList(movies.results))
        .catch(error => console.log(error))
        
    },[])

  return (
    <>
      <h1 className='titleMovies'>Movies</h1>
      <div className="container-movies">
        {
          movieList.map(movie => (
            <div key={movie.id} className="movie-card" onClick={() => setSelectMovie(movie)} >
              <img className='poster-img' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{width:"200px"}}/>
              <h2>{movie.title}</h2>
              <p>{movie.vote_average.toFixed(1)}</p>
            </div>
          ))
        }
      </div>
      {selectMovie && <CardDetail movie={selectMovie} onClose={()=> setSelectMovie(null)}/>}
    </>
  )
}
