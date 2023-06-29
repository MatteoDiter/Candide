import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default MainNavigation;