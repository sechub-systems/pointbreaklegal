import React, { useEffect, useRef } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";
import logo from "/logo.webp";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navlinks = [
    { path: "#", display: "SERVICES" },
    { path: "#", display: "LEASING" },
    { path: "#", display: "PRICING" },
    { path: "#", display: "TEAM" },
    { path: "#", display: "CONTACT" },
  ];

  const menuToggle = () => menuRef.current.classList.toggle("nav--active");

  const stickyNav = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky--nav");
      } else {
        headerRef.current.classList.remove("sticky--nav");
      }
    });
  };
  useEffect(() => {
    stickyNav();
    return () => window.removeEventListener("scroll", stickyNav);
  });

  return (
    <>
      <div className="nav--container" ref={headerRef}>
        <div className="nav--content">
          <div className="left-nav-side">
            <div className="logo">
              <NavLink className="logo" to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </div>
          </div>
          <div className="mid-nav-side">
            <div className="nav" ref={menuRef} onClick={menuToggle}>
              <ul className="nav--menu">
                {navlinks.map((item, id) => (
                  <li className="nav--links" key={id}>
                    <NavLink
                      //   style={{ color: "rgba(7, 17, 31, 0.9)" }}
                      className={(navClass) =>
                        navClass.isActive ? "nav--active" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="nav-btn">
                <button className="book--btn nav--btn">
                  <NavLink className="book--btn nav--btn" to="#">
                    BOOK NOW
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div className="right-nav-side">
            <div className="toggleMenu">
              <RiMenu4Fill onClick={menuToggle} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
