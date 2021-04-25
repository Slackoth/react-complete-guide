import React from 'react';
import AuxWrapper from '../../hoc/AuxWrapper';
import LayoutStyle from './Layout.module.css';

const layout = props => {
    return(
        <AuxWrapper>
        <div>Navbar, SideDrawer, Backdrop</div>
        <main className={LayoutStyle.Content}>
            {props.children}
        </main>
        </AuxWrapper>
    );
};

export default layout;