import React, { Fragment } from "react";
import Logo from "../../images/Brand.png";
import "./index.css";
import { Link } from "react-router-dom";
const NavbarMenu = () => {
  return (
    <Fragment>
      <div className="navbar py-3">
        <div className="logo">
          <img src={Logo} alt={Logo} />
        </div>
        <div className="location-katalog d-flex align-items-center">
          <div className="location d-flex align-items-center mx-3">
            <box-icon name="location-plus" color="#4e40a1"></box-icon>
            <span>Beruniy ko'chasi</span>
          </div>
          <div className="katalog d-flex align-items-center">
            <box-icon name="card" color="#4e40a1"></box-icon>
            <span>Katalog</span>
          </div>
        </div>
        <div className="notification d-flex align-items-center">
          <div className="shop">
            <button>
              <box-icon name="shopping-bag" color="#4e40a1"></box-icon>
            </button>
            <span className="badge position-absolute">0</span>
          </div>
          <div className="kabinets mx-3">
            <button>
              <box-icon name="user" color="#4e40a1"></box-icon>
            </button>
          </div>
        </div>
      </div>
      <div className="navbar">
        <ul className="nav ulList">
          <li>
            <Link to={"/"} className="text-decoration-none">Home</Link>
          </li>
          <li>
            <Link to={"/"} className="text-decoration-none">Home</Link>
          </li>
          <li>
            <Link to={"/"} className="text-decoration-none">Home</Link>
          </li>
          <li>
            <Link to={"/"} className="text-decoration-none">Home</Link>
          </li>
          <li>
            <Link to={"/"} className="text-decoration-none">Home</Link>
          </li>
          <li>
            <Link to={"/"} className="text-decoration-none">Home</Link>
          </li>
          <li>
            <Link to={"/"} className="text-decoration-none">Home</Link>
          </li>
          <li>
            <Link to={"/"} className="text-decoration-none">Home</Link>
          </li>
          <li>
            <Link to={"/"} className="text-decoration-none">Home</Link>
          </li>
          <li>
            <Link to={"/"} className="text-decoration-none">Home</Link>
          </li>
          <li>
            <Link to={"/"} className="text-decoration-none">Home</Link>
          </li>
          <li>
            <Link to={"/"} className="text-decoration-none">Home</Link>
          </li>
          <li>
            <Link to={"/"} className="text-decoration-none">Home</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default NavbarMenu;
