import { useState, useEffect } from "react";
import CustomePagination from './CustomPagination';
import Genres from "./Genres";
import useGenre from './Hooks/useGenre';

const Movie = () => {
    const[page, setPage] = useState(1);
    const[movie, setMovie] = useState([]);
    const[numOfPages, setNumOfPages] = useState()
    const[selectedGenres, setSelectedGenres] = useState([]);
    const[genres,setGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres);
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a619788e83ab1a8966b53d0814fc73d9&language=en-US&sort_by=popularity.desc&include_video=true&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`)
        .then(res=>res.json())
        .then(json=>{
            setMovie(json.results)
            setNumOfPages(json.total_pages)
        })
    },[page,genreforURL])
    return(
        <div>
            <h1 className="heading">Movie</h1>
            <Genres 
                type="movie"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="trending">
                {movie.map((mov,id)=>{
                    return(
                        <div className="card" key={id}>
                            <img src={`https://image.tmdb.org/t/p/w300/${mov.poster_path}`} alt="Not available" />
                            <p className="movieTitle">{mov.original_title}</p>
                            <p className="movieVote">Rating: {mov.vote_average}</p>
                        </div>
                    )
                })}
            </div>
            <CustomePagination 
                setPage={setPage}
                numOfPages={numOfPages}
            />
        </div>
    );
}
export default Movie;