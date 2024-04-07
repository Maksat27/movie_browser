import { useHistory, Link } from "react-router-dom";
import logoPic from '../img/—Pngtree—movie board icon_4751062.png';

const Navbar = ({ searchText, setSearchText }) => {
  const history = useHistory();

  const updateSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    history.push('/search');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{width: '60px', height: '60px'}}>
          <img src={logoPic} alt="Logo" style={{width: '100%', height: '100%'}}/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="/"
                tabIndex="-1"
                aria-disabled="true"
              >
                Coming soon
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;