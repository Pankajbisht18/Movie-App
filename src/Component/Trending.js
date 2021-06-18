import { useState, useEffect } from "react";
import './Trending.css';

const Trending = () => {
    const [trend, setTrend] = useState([]);
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/trending/all/day?api_key=a619788e83ab1a8966b53d0814fc73d9")
        .then(res=>res.json())
        .then(json => setTrend(json.results));
    },[])
    console.log(trend)
    return(
        <div>
            <h1 className="heading">Trending</h1>
            <div className="trending">
                {trend.map((movie,id)=>{
                    return(
                        <div className="card" key={id}>
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="Image not available" />
                            <p className="movieTitle">{movie.name || movie.original_title}</p>
                            <p className="movieVote">Rating: {movie.vote_average}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Trending;