import React from 'react';

class UserCard extends React.Component {
    render() {
        return (
            <div className="user-card">
                <button className='cross'> ❌ </button>
                <img className='avatar' src={image} alt='avatar'></img>
                <h1>{name}</h1>
                <h3>Status<span>{status}</span></h3>
                <h3>Volunteers<span>{volunteers}</span></h3>
                <a className="disabled" href={audio}>Audio</a>
                <a className="disabled" href={video}>Video</a>
                {/* Add: copy location to fwd */}
                <button className="tooltip-btn">Send Help!</button>
            </div>
        );
    }
}

export default UserCard;