import cart_img from "../assets/cart_icon.png";
import user_img from "../assets/profile_icon.png";
import search_img from "../assets/search_icon.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import '../index.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container" style={{fontFamily: "Outfit, sans-serif", fontWeight: 500, lineHeight:"20px", fontSize:"14px", color:"red"}}>
        <div>
          <Link
                    to="/"
                    className="navbar-brand fw-bold fs-3"
                >
          <img src={logo} alt="Logo" width="100" height="50" />
          </Link>
        </div>

        <div className="navbar-nav">
          <Link className="nav-link text-dark text-uppercase" to="/">
            Home
          </Link>
          <Link className="nav-link text-dark text-uppercase" to="/collection">
            Collection
          </Link>
          <Link className="nav-link text-dark text-uppercase" to="/about">
            About
          </Link>

          <Link className= "nav-link text-dark text-uppercase" to="/contact">
            Contact
          </Link>

          
        </div>
        <div className="d-flex gap-3">
          <img src={search_img} alt="Search" width="20" height="20" />
          <img src={user_img} alt="User" width="20" height="20" />
          <img src={cart_img} alt="Cart" width="20" height="20" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
