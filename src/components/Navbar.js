import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Navbar() {
  const itemStyle = {
    position: "relative",
    marginTop: "-25px",
    marginLeft: "-5px",
    zIndex: "1",
    marginRight: "17px",
  };
  const cartItems = useSelector((state) => state.cartOperations);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="#" className="navbar-brand">
          amazon
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
             <Link to="/billing" className="nav-link">Billing</Link> 
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/support" className="nav-link">
                Support
              </Link>
            </li>
          </ul>
          <i className="fa-solid fa-cart-plus" style={{ color: "#e2e5e9" }}></i>
          <span className="badge badge-danger" style={itemStyle}>
            {cartItems.length}
          </span>
        </div>
      </nav>
    </>
  );
}
