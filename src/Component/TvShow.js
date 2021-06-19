import { useState, useEffect } from "react";
import CustomPagination from "./CustomPagination";
const TvShow = () => {
    const[page,setPage] = useState(1);
    const[Tv,setTv] = useState([]);
    const[numOfPages, setNumOfPages] = useState();

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=a619788e83ab1a8966b53d0814fc73d9&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate&page=${page}`)
        .then(res=>res.json())
        .then(json=>{
            setTv(json.results)
            setNumOfPages(json.total_pages);
        })
    },[page])
    return(
        <div>
            <h1 className="heading">TV Show</h1>
            <div className="trending">
                {Tv.map((tv,id)=>{
                    return(
                        <div className="card" key={id}>
                            <img src={`https://image.tmdb.org/t/p/w300/${tv.poster_path}`} alt="Not available" />
                            <p className="movieTitle">{tv.original_name}</p>
                            <p className="movieVote">Rating: {tv.vote_average}</p>
                        </div>
                    )
                })}
            </div>
            <CustomPagination 
                setPage={setPage}
                numOfPages={numOfPages}
            />
        </div>
    );
}
export default TvShow;