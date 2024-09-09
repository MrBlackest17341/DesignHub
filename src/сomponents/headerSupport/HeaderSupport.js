import React from 'react';
import './HeaderSupport.css';

import bellIcon from '../../img/icon/bell.svg'
import Profile from '../../img/Profile.png'
import { Link } from 'react-router-dom'

const HeaderSupport = () => {
  return (
    <header className="header">
      <div className="container header-container">
				<div className="header__left">
					<Link to="/" className="header__logo">LOGO</Link>
						<nav className="header__nav">
							<ul className="header__nav-list">
								<li className="header__nav-li">
									<a href="#">Projects</a>
								<ul className="dropdown">
                  <li><a href="#">Project 1</a></li>
                  <li><a href="#">Project 2</a></li>
									<div className='dropdown-divider'></div>
                  <li><a href="#">For you</a></li>
                  <li><a href="#">Illustration</a></li>
                  <li><a href="#">Graphic design</a></li>
                  <li><a href="#">Photo</a></li>
                </ul></li>
								<li className="header__nav-li"><Link to="/vacancies">Vacancies</Link></li>
								<li className="header__nav-li"><a href="#">Specialists</a></li>
								<li className="header__nav-li"><a href="#">Education</a></li>
								<li className="header__nav-li"><a href="#">Support</a></li>
							</ul>
						</nav>
				</div>

        <div className="header__actions">
          <input type="text" placeholder="Search" className="header__search" />
          <button className="header__login">Share the project</button>
          <img src={bellIcon} alt="bell" />
          <img src={Profile} alt='profile'/>
        </div>
      </div>
    </header>
  )
};

export default HeaderSupport;