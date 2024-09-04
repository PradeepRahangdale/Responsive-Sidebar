import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Ensure your custom styles are imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSuitcase,
  faFileAlt,
  faBook,
  faChartLine,
  faUser,
  faEnvelope,
  faChartBar,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const VerticalNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [sidebarActive, setSidebarActive] = useState(false);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleSidebar = () => {
    setSidebarActive((prevState) => !prevState);
  };

  return (
    <div className={`container ${sidebarActive ? 'sidebar-active' : ''}`}>
      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
        <div className="menu-btn" onClick={toggleSidebar}>
          <i className="ph-bold ph-caret-left"></i>
        </div>
        <div className="head">
          <div className="user-img">
            <img src="user.jpg" alt="User" />
          </div>
          <div className="user-details">
            <p className="title">Full Stack Developer</p>
            <p className="name">Pradeep</p>
          </div>
        </div>
        <div className="nav">
          <div className="menu">
            <p className="title">Main</p>
            <ul>
              <li className={activeMenu === 'dashboard' ? 'active' : ''}>
                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuClick('dashboard'); }}>
                  <FontAwesomeIcon icon={faHome} className="nav-icon" />
                  <span className="text">Dashboard</span>
                </a>
              </li>
              <li className={activeMenu === 'audience' ? 'active' : ''}>
                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuClick('audience'); }}>
                  <FontAwesomeIcon icon={faUser} className="nav-icon" />
                  <span className="text">Audience</span>
                  <i className="arrow ph-bold ph-caret-down"></i>
                </a>
                <ul className={`sub-menu ${activeMenu === 'audience' ? 'open' : ''}`}>
                  <li>
                    <a href="#"><span className="text">Users</span></a>
                  </li>
                  <li>
                    <a href="#"><span className="text">Subscribers</span></a>
                  </li>
                </ul>
              </li>
              <li className={activeMenu === 'posts' ? 'active' : ''}>
                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuClick('posts'); }}>
                  <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
                  <span className="text">Posts</span>
                </a>
              </li>
              <li className={activeMenu === 'schedules' ? 'active' : ''}>
                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuClick('schedules'); }}>
                  <FontAwesomeIcon icon={faBook} className="nav-icon" />
                  <span className="text">Schedules</span>
                </a>
              </li>
              <li className={activeMenu === 'income' ? 'active' : ''}>
                <a href="#" onClick={(e) => { e.preventDefault(); handleMenuClick('income'); }}>
                  <FontAwesomeIcon icon={faChartBar} className="nav-icon" />
                  <span className="text">Income</span>
                  <i className="arrow ph-bold ph-caret-down"></i>
                </a>
                <ul className={`sub-menu ${activeMenu === 'income' ? 'open' : ''}`}>
                  <li><a href="#"><span className="text">Earnings</span></a></li>
                  <li><a href="#"><span className="text">Funds</span></a></li>
                  <li><a href="#"><span className="text">Declines</span></a></li>
                  <li><a href="#"><span className="text">Payouts</span></a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="menu">
            <p className="title">Settings</p>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faCog} className="nav-icon" />
                  <span className="text">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu">
          <p className="title">Account</p>
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
                <span className="text">Help</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" />
                <span className="text">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="credits">
        <h1>
          Fully Responsive <br />
          Sidebar by Pradeep
        </h1>
      </div>
    </div>
  );
};

export default VerticalNavbar;
