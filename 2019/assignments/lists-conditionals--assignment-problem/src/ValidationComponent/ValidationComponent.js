import React from 'react';

const ValidationComponent = (props) => {
    const message = props.textLength > 5 
        ? 'Text long enough' : 'Text too short';

    return(
        <p>{message}</p>
    );
};

export default ValidationComponent;