import React from 'react';
import PropTypes from 'prop-types';

class UserCard extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            name: PropTypes.string,
            phone: PropTypes.string,
            status: PropTypes.bool,
            contacts: PropTypes.array,
            email: PropTypes.string,
            coordinates: PropTypes.object,
            pwd: PropTypes.string,
            profile: PropTypes.string,
            location: PropTypes.object,
            volunteers: PropTypes.array,
        })
    };
    render() {
        return (
            <div className="user-card">
                <button className='cross'> ❌ </button>
                <img className='avatar' src='/avatar.jpg' alt='avatar'></img>
                <h1>{this.props.name}</h1>
                <h3>Status<span>{this.props.status}</span></h3>
                <h3>Volunteers<span>{this.props.volunteers}</span></h3>
                <a className="disabled" href='/video.html'>Audio</a>
                <a className="disabled" href='/video.html'>Video</a>
                {/* Add: copy location to fwd */}
                <button className="tooltip-btn">Send Help!</button>
            </div>
        );
    }
}

export default UserCard;