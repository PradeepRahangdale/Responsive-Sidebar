import React, { useState } from 'react';
import './Dropdown.css'; // Your CSS file

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="message-icon d-flex align-items-center">
    <div className="dropdown " onMouseLeave={closeDropdown}>
      <button className="dropbtn" onMouseEnter={toggleDropdown}>
        Dropdown
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
        </div>
      )}
    </div>
    <div className="dropdown" onMouseLeave={closeDropdown}>
    <button className="dropbtn" onMouseEnter={toggleDropdown}>
      Dropdown
    </button>
    {isOpen && (
      <div className="dropdown-content">
        <a href="#link1">Link 1</a>
        <a href="#link2">Link 2</a>
        <a href="#link3">Link 3</a>
      </div>
    )}
  </div>
  <div className="dropdown" onMouseLeave={closeDropdown}>
      <button className="dropbtn" onMouseEnter={toggleDropdown}>
        Aleart
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
        </div>
      )}
    </div>
    <div className="dropdown" onMouseLeave={closeDropdown}>
    <button className="dropbtn" onMouseEnter={toggleDropdown}>
      Menu
    </button>
    {isOpen && (
      <div className="dropdown-content">
        <a href="#link1">Link 1</a>
        <a href="#link2">Link 2</a>
        <a href="#link3">Link 3</a>
      </div>
    )}
  </div>
  <div className="dropdown" onMouseLeave={closeDropdown}>
      <button className="dropbtn" onMouseEnter={toggleDropdown}>
        Dashboard
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
        </div>
      )}
    </div>
    <div className="dropdown" onMouseLeave={closeDropdown}>
    <button className="dropbtn" onMouseEnter={toggleDropdown}>
      Support
    </button>
    {isOpen && (
      <div className="dropdown-content">
        <a href="#link1">Link 1</a>
        <a href="#link2">Link 2</a>
        <a href="#link3">Link 3</a>
      </div>
    )}
  </div>
 </div>
    
  );
};

export default Dropdown;
