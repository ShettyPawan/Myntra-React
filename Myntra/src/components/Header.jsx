import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bagCounter = useSelector((store) => store.bag);
  return (
    <>
      <header className="headerContainer">
        <div className="logoContainer">
          <Link to="/">
            <img
              className="myntraLogo"
              src="./src/images/myntra_logo.webp"
              alt="myntraLogo"
            />
          </Link>
        </div>
        <nav className="navBar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>

        <div className="searchBar">
          <span className="material-symbols-outlined searchIcon">search</span>
          <input
            type="text"
            name="searchBar"
            id="inputSearch"
            placeholder="Search for Products,Brands and More"
          />
        </div>

        <div className="actionBar">
          <div className="actionContainer">
            <span className="material-symbols-outlined profileIcon">
              person
            </span>
            <span className="profileTitle">Profile</span>
          </div>

          <div className="actionContainer">
            <span className="material-symbols-outlined wishlistIcon">
              favorite
            </span>
            <span className="wishlistTitle">WishList</span>
          </div>

          <Link className="actionContainer cart" to="/bag">
            <span className="material-symbols-outlined bagIcon">
              shopping_bag
            </span>
            <span className="bagTitle">Bag</span>
          </Link>
          <div className="bagCounter">{bagCounter.length}</div>
        </div>
      </header>
    </>
  );
};

export default Header;
