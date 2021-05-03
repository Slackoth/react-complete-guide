import React from 'react';
import LogoStyle from './Logo.module.css';
import burgerLogo from '../../assets/img/burger-logo.png';

const logo = props => {
    return (
        <div className={LogoStyle.Logo}>
            <img src={burgerLogo} alt='BurgerLogo'/>
        </div>
    );
};

export default logo;