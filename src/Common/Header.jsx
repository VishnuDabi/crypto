import React from "react";
import "./header.css";
import { IoIosMenu, IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = ({ sidebarHandler }) => {
  return (
    <div>
      <div className="header__container">
        <div className="header__wrapper">
          <div className="header__child1">
            <span className="menu))icon">
              <IoIosMenu className="icon" onClick={sidebarHandler} />
            </span>
            <img
              className="img"
              src="https://altcoinsbox.com/wp-content/uploads/2023/01/crypto.com-logo-300x300.webp"
              alt="edfefc"
            />
            <span>Crypto</span>

            <hr />
            <div className="search__container">
              <input
                className="search__box"
                type="search"
                name=""
                id=""
                placeholder="Search Here"
              />
              <span className="search__icon">
                <IoMdSearch className="searchIcon icon" />
              </span>
            </div>
          </div>
          <div className="header__child2">
            <ul className="header__list">
              <li className="header__list_item">
                <Link to="/register">
                  <span>Sign up</span>
                </Link>
              </li>
              <li className="header__list_item">
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </li>
              <li className="header__list_item">
                <span>Cart</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
