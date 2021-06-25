import React, { useState,useEffect } from "react";
import { useParams } from "react-router";
import TheatersIcon from '@material-ui/icons/Theaters';
import './content.css'

const ContentTrending = () => {
    const {id, media_type} = useParams();
    const[data, setData] = useState([]);
    const[genres, setGenres] = useState([]);
    const key = "a619788e83ab1a8966b53d0814fc73d9";
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${key}&language=en-US`)
        .then(res=>res.json())
        .then(json=>{
            setData(json)
            setGenres(json.genres)
        })
        // eslint-disable-next-line
    },[])
    console.log(data);
    console.log(genres)
    return(
        <div>
            <h1 className="content-heading">{data.original_title || data.name}</h1>
            <div className="content-box">
                <div className="content-image">
                    <img src={data.backdrop_path ? `https://image.tmdb.org/t/p/w500/${data.backdrop_path}` : `https://www.movienewz.com/img/films/poster-holder.jpg`}  alt={data.original_title}/>
                </div>
                <div className="content-details">
                    <h2>{data.original_title || data.name}</h2>
                    <h4>Rating: {data.vote_average}</h4>
                    <h4>Release-Date: {data.release_date || data.first_air_date}</h4>
                    <h4>Language: {data.original_language}</h4>
                    <p>{data.overview}</p>
                    <div style={{display:"flex",flexWrap:"wrap"}}>
                        {genres.map((gen,id)=>{
                            return( 
                                    <div key={id} className="content-genres">
                                        <p>{gen.name}</p>
                                    </div>
                            )
                        })}
                    </div>
                    <button className="content-btn">Watch Trailer</button>
                </div>
            </div>   
        </div>
    );
}
export default ContentTrending;