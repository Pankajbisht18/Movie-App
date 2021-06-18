import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav>
            <input type="checkbox" id="check" />
            <label for="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <label className="logo">Movie App</label>
            <ul>
                <li>
                    <Link to="/">Trending</Link>
                </li>
                <li>
                    <Link to="/movie">Movie</Link>
                </li>
                <li>
                    <Link to="/tvshow">Tv Show</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;