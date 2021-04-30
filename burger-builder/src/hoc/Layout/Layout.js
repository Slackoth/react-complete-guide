import React, {Component} from 'react';
import LayoutStyle from './Layout.module.css';
import AuxWrapper from '../AuxWrapper/AuxWrapper';
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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