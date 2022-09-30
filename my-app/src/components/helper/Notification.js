import React from 'react';

// Needed: user's Name, location
// Maintaining: availability
// function: add to volunteer list
class Notification extends React.Component {
    state = {
        availability: false,
    };

    handleAvailability = (e) => {
        if (e.target.value == "Yes") {
            this.setState({ availability: true });
        } else {
            this.setState({ availability: false });
        }
    }

    render() {
        return (
            <div className="ntfn">
                <h1><span className="bld">{name}</span> needs your help at <span className="bld">{location}</span>. Can you volunteer to help?</h1>
                <button onClick={this.handleAvailability}>Yes</button>
                <button onClick={this.handleAvailability}>No</button>
            </div>
        );
    }
}

export default Notification;