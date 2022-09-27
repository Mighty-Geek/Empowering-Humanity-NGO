import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <a href="mailto:aamishajangra@gmail.com" className="nav-btn">Request Change</a>
                <Link to="/feed" className="nav-btn">Feed</Link>
                <Link to="/defense" className="nav-btn">Self Defense</Link>
                <Link to="/" className="nav-btn">Logout</Link>
            </div>
        );
    }
}

export default Nav;