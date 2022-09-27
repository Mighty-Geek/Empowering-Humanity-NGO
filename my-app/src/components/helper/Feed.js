import React from 'react';
import Nav from './Nav';

class Feed extends React.Component {
    render() {
        return (
            <>
                <div className="heading">
                    <h1>Suraksha</h1>
                    <h3>Portal</h3>
                </div>
                <Nav />
                <div className="feed-main">
                    <div className="left">
                        <img src="../feed.PNG"></img>
                        <img src="../feed.PNG"></img>
                        <img className="comment" src="../comment.PNG"></img>
                    </div>
                </div>
            </>
        );
    }
}

export default Feed;