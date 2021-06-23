import { useState, useEffect } from "react";
import CustomPagination from "./CustomPagination"; 
import {Link} from 'react-router-dom';
import './Trending.css';

const Trending = () => {
    const [page, setPage] = useState(1)
    const [trend, setTrend] = useState([]);
    const key = "a619788e83ab1a8966b53d0814fc73d9";
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}&page=${page}`)
        .then(res=>res.json())
        .then(json=>{
            console.log(json);
            setTrend(json.results)
        })
    },[page])
    return(
        <div>
            <h1 className="heading">Trending</h1>
            <div className="trending">
                {trend.map((movie,id)=>{
                    return(
                        <Link to={"/"+movie.id}>
                            <div className="card" key={id}>
                                {/* <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="Not available" /> */}
                                <img 
                                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : `https://www.movienewz.com/img/films/poster-holder.jpg` } 
                                    alt="Not Available" 
                                />
                                <p className="movieTitle">{movie.name || movie.original_title}</p>
                                <p className="movieVote">Rating: {movie.vote_average}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <>
            <CustomPagination 
                setPage={setPage}
            />
            </> 
        </div>
    );
}
export default Trending;