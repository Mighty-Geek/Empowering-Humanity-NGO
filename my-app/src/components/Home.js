import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className='box'>
                <Link to="/user" className="btn">User</Link>
                <Link to="/admin" className="btn">Admin</Link>
                <Link to="/superadmin" className="btn">Super Admin</Link>
            </div>
        );
    }
}

export default Home;
