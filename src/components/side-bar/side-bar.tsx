import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/icons/circle-logo.png'
import profileLogo from '../../assets/icons/Profile.svg'
import settingsLogo from '../../assets/icons/Settings.svg'
import dashboardLogo from '../../assets/icons/Dashboard.svg'
import logoutLogo from '../../assets/icons/logout.svg'

import './side-bar.scss'

const SideBar: React.FC = () => {
  return(
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" className="logo__img"/>
      </div>
      <nav className="nav">
        <ul>
          <Link to="/"><li className="nav__item">
            <img className="nav__item-logo" src={profileLogo} alt="Profile"/>
          </li></Link>
          <Link to="/"><li className="nav__item">
            <img className="nav__item-logo" src={dashboardLogo} alt="Dashboard"/>
          </li></Link>
          <Link to="/settings"><li className="nav__item">
            <img className="nav__item-logo" src={settingsLogo} alt="Settings"/>
          </li></Link>
        </ul>
        <div className="nav__item">
          <img className="nav__item-logo" src={logoutLogo} alt="logout" />
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
