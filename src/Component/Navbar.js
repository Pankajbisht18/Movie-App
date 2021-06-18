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
                <li>Trending</li>
                <li>Movie</li>
                <li>TV show</li>
                <li>Search</li>
            </ul>
        </nav>
    );
}
export default Navbar;