import React from "react";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <a href="https://logisticacastrofallas.com" className="logo">
            <img src={logo} alt="logo" width="100px" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="https://logisticacastrofallas.com">Home</a>
              </li>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
