import React from 'react';
import Nav from './helper/Nav.js';

class UserPage extends React.Component {
    render() {
        return (
            <>
                <div className="heading">
                    <h1>Suraksha</h1>
                    <h3>Portal</h3>
                </div>
                <Nav />
                <button className="emergency">HELP</button>
            </>
        );
    }
}

export default UserPage;