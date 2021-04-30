import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar';
import AuxWrapper from '../../hoc/AuxWrapper';
import LayoutStyle from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openSideDrawer: false
        };
    }

    closeSideDrawerdHandler = () => {
        this.setState({openSideDrawer: false});
    }

    openSideDrawerHandler = () => {
        this.setState({openSideDrawer: true});
    }

    render() { 
        return(
            <AuxWrapper>
            <Toolbar openDrawer={this.openSideDrawerHandler}/>
            <SideDrawer open={this.state.openSideDrawer} close={this.closeSideDrawerdHandler}/>
            <main className={LayoutStyle.Content}>
                {this.props.children}
            </main>
            </AuxWrapper>
        );
    }
};

export default Layout;