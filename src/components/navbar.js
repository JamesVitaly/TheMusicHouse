import React, { useState, useEffect } from "react";
import Link from "gatsby-link";
import Logo from "../images/logo.png";
import { CSSTransition } from "react-transition-group";
import styled from 'styled-components';

const Book = styled.a`
background: #D8D8D8;
border: 4px solid #D8D8D8;
font-size: 16px;
font-family: 'Barlow';
margin-right: 10px;
padding: 5px 20px;
cursor: pointer;
`

const Overlay = ({ toggleMenu, showMobileMenu }) => {
  return showMobileMenu ? (
    <CSSTransition in={showMobileMenu} timeout={200} classNames="MobileMenuContainer">
      <div
        className="MobileMenuContainer"
        onClick={()=> toggleMenu(false)}
      >
      </div>
    </CSSTransition>
  ) : null;
}

const MobileNav = ({ toggleMenu }) => {
  return (
    <div className="MobileNav">
      <button onClick={() => toggleMenu(true)}>
        <i className="fas fa-bars" />
      </button>
    </div>
  )
}

const MobileMenu = ({ showMobileMenu, toggleMenu }) => {
  return (
      <menu
        onClick={(e) => e.stopPropagation()}
        className={`MobileMenu ${showMobileMenu ? 'showMobileMenu' : 'hideMobileMenu'}`}
        >
        <header className="MobileMenuHeader">
          <button
            onClick={() => toggleMenu(false)}>
            <i className="fas fa-times"></i>
          </button>
        </header>
          <Link className="MobileMenuLinks" to="/methodology">
            Methodology
          </Link>
          <Link className="MobileMenuLinks" to="/pricing">
            Pricing
          </Link>
          <Link className="MobileMenuLinks" to="/tips">
            Tips
          </Link>
          <Book to="/#book">
            Book
          </Book>
        </menu>
  )
}

const Navbar = ({ title, showScrollingNav, className }) => {
  const [screenWidth, updateScreenWidth] = useState(window.innerWidth);
  const [showMobileMenu, toggleMenu] = useState(false);
  const updateWidth = () => {
    updateScreenWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    return function cleanup() {
      window.removeEventListener("resize", updateWidth);
    }
  })
  console.log(className)
    return (
      <div className={className}>
        <nav key={screenWidth}>
            <div>
              {screenWidth > 998 ?
                <>
                  <menu>
                  <Link to="/methodology">
                    Methodology
                  </Link>
                  <span>|</span>
                  <Link to="/#pricing">
                    Pricing
                  </Link>
                  <span>|</span>
                  <Link to="/tips">
                    Tips
                  </Link>
                  <Book to="/#book">
                    Book
                  </Book>
                </menu>
              </> :
              <>
              <MobileNav toggleMenu={toggleMenu} showMobileMenu={showMobileMenu}/>
              </>
              }
            </div>
            <Overlay toggleMenu={toggleMenu} showMobileMenu={showMobileMenu}/>
            <MobileMenu toggleMenu={toggleMenu} showMobileMenu={showMobileMenu}/>
            <Link to="/" className="h-full">
              <img
                src={Logo}
                alt="doopoll – {title}"
                className="logo"
              />
            </Link>
        </nav>
              {showScrollingNav &&
        <CSSTransition in={showScrollingNav} timeout={200} classNames="scrolling">
          <nav key={screenWidth} className="scrolling">
          <div>
            {screenWidth > 998 ?
              <>
                <menu>
                <Link to="/methodology">
                  Methodology
                </Link>
                <span>|</span>
                <Link to="#pricing">
                  Pricing
                </Link>
                <span>|</span>
                <Link to="/tips">
                  Tips
                </Link>
                <Book to="#book">
                  Book
                </Book>
              </menu>
            </> :
            <>
            <MobileNav toggleMenu={toggleMenu} showMobileMenu={showMobileMenu}/>
            </>
            }
          </div>
          <Overlay toggleMenu={toggleMenu} showMobileMenu={showMobileMenu}/>
          <MobileMenu toggleMenu={toggleMenu} showMobileMenu={showMobileMenu}/>
          <Link to="/" className="h-full">
            <img
              src={Logo}
              alt="doopoll – {title}"
              className="logo"
            />
          </Link>
      </nav>
    </CSSTransition>}
      </div>
    );
}

export default styled(Navbar)`
font-family: 'Barlow';
.logo {
  width: 240px;
  margin: 0;
  padding-top: 15px;
}

nav {
  box-sizing: border-box;
  padding: 0 10px;
  height: 80px;
  border-bottom: none;
  display: flex;
  justify-content: space-between;
  background: white;
}

.scrolling {
  position: fixed;
  width: 100%;
  top:0;
  left:0;
  z-index: 1000;
  box-shadow: 0 1px 2px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.16);
}

.scrolling-enter {
  top: -80px;
}

.scrolling-enter-active {
  top: 0;
  transition: top 500ms;
}
.scrolling-exit {
  top: 0;
}
.scrolling-exit-active {
  top: -80px;
  transition: top 500ms;
}

@media(min-width: 768px) {
  nav {
    padding: 0 40px 0 10px;
  }
}

.MobileNav {
 width: 100%;
 padding: 10px 15px;
 display: flex;
 justify-content: flex-end;

}

.MobileNav > button {
  outline: none;
  background: none;
  border: none;
  padding-top: 10px;
  cursor: pointer;
}

.MobileNav > button > i {
  margin: 10px 15px;
  font-size: 24px;
  color: #22292f;
  cursor: pointer;
}

.menu-right {
  padding: 0;
  margin: 15px 20px 15px auto;
}


menu {
  padding: 10px 25px;
  margin: 20px 10px;
  a {
    font-size: 20px;
  }
}

menu > * {
  margin: 0 20px;
  font-weight: 500;
  color: #454545;
  font-size: 16px;
  text-decoration: none;
  font-weight: 500;
}

.MobileMenuContainer {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  opacity: 1;
  background-color: rgba(17, 103, 250, 0.5);
}

.MobileMenuContainer-enter {
  opacity: 0;
}

.MobileMenuContainer-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}
.MobileMenuContainer-exit {
  opacity: 1;
}
.MobileMenuContainer-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}

.MobileMenuHeader {
  width: 90%;
  box-sizing: border-box;
  height: 30px;
  display: flex;
  justify-content: flex-end;
}

.MobileMenuHeader > button > i {
  font-size: 24px;
}

.MobileMenuHeader > button {
  border: none;
  background: none;
}

.MobileMenu {
  width: 100%;
  max-width: 324px;
  box-sizing: border-box;
  background: white;
  height: 100%;
  top: 0;
  position: fixed;
  padding:0;
  margin: 0;
  display: flex;
  flex-direction: column;
  padding: 25px 15px;
  transition: right 0.5s;
  z-index: 100000;
}

.hideMobileMenu {
  right: -500px;
}

.showMobileMenu {
  right: 0;
}

.MobileMenuLinks {
  font-size: 24px;
  font-weight: bold;
  padding: 20px 0;
  box-sizing:  border-box;
}
span {
  margin: 0;
}
`;
