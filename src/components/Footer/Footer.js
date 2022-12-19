import React from "react";
import { NavLink } from 'react-router-dom';
import './footer.css';
import github from '../../images/gh.svg'
import facebook from '../../images/fb.svg'


function Footer(){
    return(
        <footer className="footer">
      <p className="footer__copyright">
        © {new Date().getFullYear()} Daniel Evgrafov
      </p>
      <nav className="footer__nav">
      <div className="footer__links">
      <NavLink
            to= "/" 
            className="footer__link"
          >
            Home
        </NavLink>
        <a 
        href="https://practicum.com"  target="_blank" className="footer__link">Practicum</a>
        </div>
        <div className="footer__icons">
        <a href="https://github.com/mistifikatorcat"  target="_blank" className="footer__icon">
          <img className="footer__icon" src={github} />
        </a>
        <a href="https://facebook.com/mistifikatorcat"  target="_blank" className="footer__icon">
          <img className="footer__icon" src={facebook} />
        </a>
      </div>
      </nav>
    </footer>
    )
}

export default Footer