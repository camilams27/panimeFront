import {  useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/navIcon1.svg';
import navIcon2 from '../assets/img/navIcon2.svg';
import navIcon3 from '../assets/img/navIcon3.svg';
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {    
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
      const onScroll = () => {
          if(window.scrollY > 50){
              seScrolled(true);
          }else {
              seScrolled(false);
          }
      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value:string) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} id="navbarContainer">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#animes" className={activeLink === 'anime' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('anime')}>Anime</Nav.Link>
              <Nav.Link href="#mangas" className={activeLink === 'manga' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('manga')}>Mangás</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd" onClick={() => console.log('here')}>
                    <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
};