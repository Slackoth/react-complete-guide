import './CharComponent.css'
import React from 'react';

const CharComponent = props => {
    return(
        <div className='CharComponent' onClick={props.clickEvent}>
            <p>{props.char}</p>
        </div>
    );
};

export default CharComponent;