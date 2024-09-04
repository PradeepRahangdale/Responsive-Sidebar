// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Sidebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    

    return (
        <div className="sidebar">
            <ul>
                <li onClick={toggleDropdown}>
                    <span>Dashboard</span>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/dashboard/default">Default</Link></li>
                            <li><Link to="/dashboard/analytics">Analytics</Link></li>
                            <li><Link to="/dashboard/ecommerce">Ecommerce</Link></li>
                            <li><Link to="/dashboard/content">Content</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link to="/pages">Pages</Link></li>
                <li><Link to="/application">Application</Link></li>
                <li><Link to="/ui">UI</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
