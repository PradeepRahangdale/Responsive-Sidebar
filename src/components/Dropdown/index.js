import React from 'react';
import './index.css';

const DropDownMenu = () => {
    return (
        <div className='flex flex-col dropDownMenu'>
            <ul className='flex flex-col gap-4'>
                <li className="sub-nav-link" href="/">Profile</li>
                <li className="sub-nav-link" href="/">Settings</li>
                <li className="sub-nav-link" href="/">Supports</li>
                <li className="sub-nav-link" href="/">Logout</li>
            </ul>
        </div>
    )
}

export default DropDownMenu
