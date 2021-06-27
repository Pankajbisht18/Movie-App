import { useState } from 'react';
import {Link} from 'react-router-dom';
import CustomPagination from './CustomPagination';
import './search.css';

const Search = () => {
    const[search, setSearch] = useState();
    const[type, setType] = useState(null);
    const[data,setData] = useState([]);
    const[page, setPage] = useState(1);
    const[numOfPages, setNumOfPages] = useState();
    //const[check,setCheck] = useState(null);
    const[searchType, setSearchType] = useState();

    const key = "a619788e83ab1a8966b53d0814fc73d9"
    const handleSearch = (evt) => {
        let val = evt.target.value;
        setSearch(val);
    }
    const handleClick = () => {
        if(type !== null)
        {
            fetch(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${key}&language=en-US&query=${search}&page=${page}&include_adult=false`)
            .then(res=>res.json())
            .then(json=>{
                setData(json.results)
                setNumOfPages(json.total_pages);
                //setCheck(json);   
             })
        }
        else{
            alert("Kindly Select Type");
        }
        
    }
    const CheckType = (evt) => {
        let searchType = evt.target.value;
        setSearchType(searchType);
        if(searchType === "movie") {
            setType(0);
        }
        else {
            setType(1)
        }
    }
    return(
        <div className="search-page">
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search"
                    value={search}
                    onChange={handleSearch}
                />
                <br />
                <button className="SearchBtn" onClick={handleClick}>
                    Search
                </button>
            </div>
            <div className="Search-label">
                <label>Movie</label>
                <input 
                    type="radio"
                    value="movie"
                    name="search"
                    onClick={CheckType}
                />
                <label>TV Show</label>
                <input 
                    type="radio"
                    value="tv"
                    name="search"
                    onClick={CheckType}
                />
            </div>
            <div className="trending">
                {data &&
                data.map((searchData,id)=>{
                    return(
                        <Link to={"/"+searchType+"/"+searchData.id} key={id}>
                            <div className="card">
                                <img 
                                    src={searchData.poster_path ? `https://image.tmdb.org/t/p/w300/${searchData.poster_path}` : `https://www.movienewz.com/img/films/poster-holder.jpg` } 
                                    alt="Not Available" 
                                />
                                <p className="movieTitle">{searchData.name || searchData.original_title}</p>
                                <p className="movieVote">Rating: {searchData.vote_average}</p>
                            </div>
                        </Link>
                    );
                })}
                {!data &&
                    (type ? <h2>No Series Found</h2>: <h2>No Movies Found</h2>)
                }
            </div>
            {numOfPages>1 && (
            <CustomPagination setPage={setPage} numOfPages={numOfPages}/>)}
        </div>
    );
}
export default Search;