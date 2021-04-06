import './UserOutput.css'
import React from 'react';

const UserOutput = props => {
    return (
        <div className='UserOutput'>
            <p>Username: {props.username}</p>
            <p>Two</p>
        </div>
    );
};

export default UserOutput;