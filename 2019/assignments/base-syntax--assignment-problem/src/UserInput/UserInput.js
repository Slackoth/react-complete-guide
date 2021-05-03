import React from 'react';

const UserInput = props => {
    const style = {
        textAlign: 'center'
    };

    return (
        <div style={style}>
            <input type='text' 
                onChange={props.changeEvent} 
                value={props.username}/>
        </div>
    );
};

export default UserInput;