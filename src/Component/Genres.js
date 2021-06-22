import { useEffect, useState } from 'react';
import { Chip } from '@material-ui/core';
import './Genres.css';
const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage,
}) => {
    const[data, setData] = useState([]);
    const key = 'a619788e83ab1a8966b53d0814fc73d9'
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g)=>g.id !== genre.id));
        setPage(1);
    };

    const handleRemove = (genre) =>  {
        setSelectedGenres(
            selectedGenres.filter((selected)=>selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    };
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${key}&language=en-US`)
        .then(res=>res.json())
        .then(json=>setData(json.genres))
        // eslint-disable-next-line
    },[])
    return(
        <div className="genres">
            {selectedGenres.map((genre) => (
                <Chip 
                    style={{margin: 2}}
                    label={genre.name}
                    key={genre.id}
                    color="Primary"
                    clickable
                    onDelete={()=>handleRemove(genre)}
                />
            ))}
            {data.map((genre)=>(
                <Chip 
                    style={{margin:2}}
                    label={genre.name}
                    key={genre.id}
                    clickable
                    onClick={()=>handleAdd(genre)}
                />
            ))}
        </div>
    );
}
export default Genres