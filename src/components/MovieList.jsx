import { useState,useEffect } from 'react'
import MovieCard from './MovieCard'

function MovieList({movie}) {
  if(movie.length === 0){
    return <p className='no-found'>No movie found.</p>
  }
  return (
    <div className="movie-list">
      {movie.map((m)=>(
        <MovieCard key={m.imdbID} movie={m}/>
      ))}
    </div>
  )
}

export default MovieList
