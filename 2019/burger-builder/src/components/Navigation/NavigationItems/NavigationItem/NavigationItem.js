import React from 'react';
import NavItemStyle from './NavigationItem.module.css';

const navigationItem = props => {
    return(
        <li className={NavItemStyle.NavigationItem}>
            <a className={props.active ? NavItemStyle.Active : null}
                href={props.link}>{props.children}</a>
        </li>
    );
};

export default navigationItem;