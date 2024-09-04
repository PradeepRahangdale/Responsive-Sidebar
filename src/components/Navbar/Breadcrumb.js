// Breadcrumb.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <nav>
            <ol className="breadcrumb">
                <li><a href="/">Home</a></li>
                {pathnames.map((pathname, index) => {
                    const href = `/${pathnames.slice(0, index + 1).join('/')}`;
                    return (
                        <li key={href}>
                            <a href={href}>{pathname.charAt(0).toUpperCase() + pathname.slice(1)}</a>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
