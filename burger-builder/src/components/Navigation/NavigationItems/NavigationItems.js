import React from 'react';
import NavItemsStyle from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => {
    return(
        <ul className={NavItemsStyle.NavigationItems}>
            <NavigationItem link='/' active={true}>Burger Builder</NavigationItem>
            <NavigationItem link='/'>Checkout</NavigationItem>
        </ul>
    );
};

export default navigationItems;