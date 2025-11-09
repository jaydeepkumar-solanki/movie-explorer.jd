import React, { useEffect, useState ,useRef} from 'react'
import MovieList from './MovieList'
function Home() {
  const [movie,SetMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const fetchMovies = async(query) => {
      setLoading(true);
      const res = await fetch(`https://www.omdbapi.com/?apikey=af9e3c3c&s=${query}`);
      const data = await res.json();
      SetMovie(data.Search || []);
      setLoading(false);
  }

  useEffect(()=>{
    fetchMovies("Avengers");
  },[]);
  
  function handleSearch(e){
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if(query){
      fetchMovies(query);
    }
  }
  return (
    <div className="home">
        <form onSubmit={handleSearch}>
            <input ref={inputRef} className="searchInput" placeholder="Search for a movie..." />
            <button type="submit">Search 🔎</button>
        </form>
        
        {loading ? <p className='loading'>Loading...</p> : <MovieList movie={movie}/>}
    </div>
  )
}

export default Home
