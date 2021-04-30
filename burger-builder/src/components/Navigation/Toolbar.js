import React from 'react';
import Logo from '../Logo/Logo';
import ToolbarStyle from './Toolbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToogle/DrawerToggle';

const toolbar = props => {
    return (
        <header className={ToolbarStyle.Toolbar}>
            <DrawerToggle clicked={props.openDrawer}/>
            <div className={ToolbarStyle.Logo}>
                <Logo/>
            </div>
            <nav className={ToolbarStyle.DesktopOnly}><NavigationItems/></nav>
        </header>
    );
};

export default toolbar;