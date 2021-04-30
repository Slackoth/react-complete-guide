import React from 'react';
import Logo from '../../Logo/Logo';
import AuxWrapper from '../../../hoc/AuxWrapper';
import Backdrop from '../../UI/Backdrop/Backdrop';
import SideDrawerStyle from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = props => {
    const classes = [SideDrawerStyle.SideDrawer, SideDrawerStyle.Close];
    
    if(props.open) {
        classes.pop();
        classes.push(SideDrawerStyle.Open);
    }

    return(
        <AuxWrapper>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={classes.join(' ')}>
                <div className={SideDrawerStyle.Logo}>
                    <Logo/>
                </div>
                <nav><NavigationItems/></nav>
            </div>
        </AuxWrapper>
    );
};

export default sideDrawer;