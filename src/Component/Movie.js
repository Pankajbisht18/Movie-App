import { useState, useEffect } from "react";

const Movie = () => {
    const[movie, setMovie] = useState([]);
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=a619788e83ab1a8966b53d0814fc73d9&language=en-US&sort_by=popularity.desc&include_video=true&with_watch_monetization_types=flatrate')
        .then(res=>res.json())
        .then(json=>setMovie(json.results))
    },[])
    console.log(movie);
    return(
        <div>
            <h1 className="heading">Movie</h1>
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
        </div>
    );
}
export default Movie;