import React from 'react';
import './style.css';
import Button from '../../components/Button';
import {Link} from 'react-router-dom';

const Welcome = () => {
    return(
      <section className="background-welcome">
          <nav className="navigation-menu">
          <Link to="/registerUser" className="user-btn">
          USUARIO
          </Link>
          <Link to="/registerEmployee" className="nav-a">
            Técnico de lavado
          </Link>
        </nav>  
      </section> 
    )
}


export default Welcome;