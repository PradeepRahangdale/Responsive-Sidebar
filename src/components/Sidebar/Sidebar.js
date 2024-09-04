import React, { useState } from 'react';
import './Sidebar.css'; // Make sure your styles are imported

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleSidebarToggle = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <div className={`container ${isSidebarActive ? 'sidebar-active' : ''}`}>
      <div className="sidebar">
        <div className="menu-btn" onClick={handleSidebarToggle}>
          <i className="ph-bold ph-caret-left"></i>
        </div>
        <div className="head">
          <div className="user-img">
            <img src="user.jpg" alt="" />
          </div>
          <div className="user-details">
            <p className="title">web developer</p>
            <p className="name">John Doe</p>
          </div>
        </div>
        <div className="nav">
          <div className="menu">
            <p className="title">Main</p>
            <ul>
              <li>
                <a href="#">
                  <i className="icon ph-bold ph-house-simple"></i>
                  <span className="text">Dashboard</span>
                </a>
              </li>
              <li
                className={activeMenu === 1 ? 'active' : ''}
                onClick={() => handleMenuClick(1)}
              >
                <a href="#">
                  <i className="icon ph-bold ph-user"></i>
                  <span className="text">Audience</span>
                  <i className="arrow ph-bold ph-caret-down"></i>
                </a>
                {activeMenu === 1 && (
                  <ul className="sub-menu">
                    <li>
                      <a href="#">
                        <span className="text">Users</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="text">Subscribers</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className={activeMenu === 2 ? 'active' : ''}
                onClick={() => handleMenuClick(2)}
              >
                <a href="#">
                  <i className="icon ph-bold ph-file-text"></i>
                  <span className="text">Posts</span>
                </a>
              </li>
              <li
                className={activeMenu === 3 ? 'active' : ''}
                onClick={() => handleMenuClick(3)}
              >
                <a href="#">
                  <i className="icon ph-bold ph-calendar-blank"></i>
                  <span className="text">Schedules</span>
                </a>
              </li>
              <li
                className={activeMenu === 4 ? 'active' : ''}
                onClick={() => handleMenuClick(4)}
              >
                <a href="#">
                  <i className="icon ph-bold ph-chart-bar"></i>
                  <span className="text">Income</span>
                  <i className="arrow ph-bold ph-caret-down"></i>
                </a>
                {activeMenu === 4 && (
                  <ul className="sub-menu">
                    <li>
                      <a href="#">
                        <span className="text">Earnings</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="text">Funds</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="text">Declines</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="text">Payouts</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="menu">
            <p className="title">Settings</p>
            <ul>
              <li>
                <a href="#">
                  <i className="icon ph-bold ph-gear"></i>
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
                <i className="icon ph-bold ph-info"></i>
                <span className="text">Help</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon ph-bold ph-sign-out"></i>
                <span className="text">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="credits">
        <h1>
          Fully Responsive <br />
          Sidebar by OSC
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
