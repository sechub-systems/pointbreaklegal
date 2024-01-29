import React from "react";
import "./Footer.css";
import logo from "/logo.webp";
import {
  MdOutlineMail,
  MdLocationOn,
  MdOutlineLocalPhone,
} from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer--wrapper">
        <div className="footer--content1">
          <div className="left--footer">
            <div className="footer--logo">
              <NavLink className="footer--logo" to="/">
                <img height="80rem" width="80rem" src={logo} alt="logo" />
                <h1>Point Break Legal</h1>
              </NavLink>
            </div>
          </div>
          <div className="mid--footer">
            <div className="mid-links">
              <NavLink className="mid--links" to="#">
                About
              </NavLink>
            </div>
            <div className="mid-links">
              <NavLink className="mid--links" to="#">
                FAQ
              </NavLink>
            </div>
            <div className="mid-links">
              <NavLink className="mid--links" to="#">
                Policy
              </NavLink>
            </div>
          </div>
          <div className="right--footer">
            <div className="footer-right-div">
              <BiLogoFacebook style={{ color: "#fff", fontSize: 18 }} />
              <p className="footer-right-links">Point Break Legal</p>
            </div>
            <div className="footer-right-div">
              <MdOutlineMail style={{ color: "#fff", fontSize: 18 }} />
              <p className="footer-right-links">pointbreaklegal@gmail.com</p>
            </div>
            <div className="footer-right-div">
              <MdLocationOn style={{ color: "#fff", fontSize: 18 }} />
              <p className="footer-right-links">NSW Australia</p>
            </div>
            <div className="footer-right-div">
              <MdOutlineLocalPhone
                className="footer-right-links"
                style={{ fontSize: 18 }}
              />
              <p className="footer-right-links" typeof="call">
                +61 (02) 6101 2402
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer--content2">
        <p className="copyright">{year} SecHub. All rights reserved &copy;</p>
      </div>
    </>
  );
};

export default Footer;
