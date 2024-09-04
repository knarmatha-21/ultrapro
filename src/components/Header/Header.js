import React, { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
import CloseIcon from "../../assets/images/close.png";
import MenuIcon from "../../assets/images/menu.png";
import ThemeIcon from "../../assets/images/theme.png";

const Header = () => {
 
  const [sideMenuWidth, setSideMenuWidth] = useState(0); 

  const openNav = () => setSideMenuWidth(100);
  const closeNav = () => setSideMenuWidth(0);

  return (
    <React.Fragment>
      <div className="homeHeaderSec">
        <div className="homeHeaderBg">
          <Navbar expand="lg">
            <Container>
              <div className={"headerFlex"}>
                <Navbar.Brand href="#home">
                  <img src={Logo} className="logoImage" alt="Logo" />
                </Navbar.Brand>
                <ul className="headerMenuLists">
                  <li>
                    <a href='#' className="headerMenuItem">Home</a>
                  </li>
                  <li>
                    <a href='#' className="headerMenuItem">Ecosystem</a>
                  </li>
                  <li>
                    <a href='#' className="headerMenuItem">About us</a>
                  </li>
                  <li>
                    <a href='#' className="headerMenuItem">Blog</a>
                  </li>
                  <li>
                    <a href='#' className="headerMenuItem">Token</a>
                  </li>
                  <li>
                    <a href='#' className="headerMenuItem">Expo</a>
                  </li>
                  <li>
                    <a href='#' className="headerMenuItem">Enhanced-Enterprises</a>
                  </li>
                </ul>
                <ul className="headerMenuLists alignItemCenter">
                  <li>
                   <Button className="headerBtn1 headerBtn">Whitepaper</Button>
                   <Button className="headerBtn2 headerBtn">Contact us</Button>
                  </li>
                  <li><img src={ThemeIcon} alt='Theme' className="themeIcon"/></li>
                </ul>
              </div>
            </Container>
          </Navbar>
        </div>
      </div>
      <div className="homeHeaderSec">
        <div className="mobileHeader homeHeaderBg">
          <div className="headerFlex">
            <img src={Logo} className="logoImage" alt="Logo" />
            <div className={"dropdownMenuFlex"} onClick={openNav}>
              <img src={MenuIcon} alt="Menu icon" className="menuIcon" />
            </div>
          </div>
          <div
            id="mySidenav"
            className="sidenav"
            style={{ width: `${sideMenuWidth}%` }}
          >
            <span className="closebtn" onClick={closeNav}>
              <img src={CloseIcon} alt="Menu icon" className="closeIcon" />
            </span>
            <ul className="mobileMenuList">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Ecosystem</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Token</a>
              </li>
              <li>
                <a>Expo</a>
              </li>
              <li>
                <a>Enhanced-Enterprises</a>
              </li>
              <li>
                <a>Whitepaper</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
