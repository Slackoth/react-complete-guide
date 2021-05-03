import PropTypes from 'prop-types';
import React, {Component} from 'react';
import PersonStyle from './Person.module.css';
import SignInContext from '../../context/sign-in-context';
import WithClass from '../../high-order-components/WithClass';

class Person extends Component {
    /**
     * This allows React to automatically connect class-based components, 
     * to the context behind the scenes and it gives the class a new property
     * named context.
     */
    static contextType = SignInContext;

    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    
    componentDidMount() {
        // this.input.focus();
        this.inputRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');

        return (
            <WithClass classAttr={PersonStyle.Person}>
                {this.context.signedIn ? 
                    <p>Signed in! </p> : <p>Please sign in...</p>}
                {/* <SignInContext.Consumer>
                    {
                        context => context.signedIn ? <p>Signed in! </p> 
                            : <p>Please sign in...</p>
                    }
                </SignInContext.Consumer> */}
                <p onClick={this.props.clickEvent}>
                    I'm a person, my name is {this.props.name} and I'm years {this.props.age} old!
                </p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changeEvent}
                    value={this.props.name} /*ref={input => this.input = input}*/
                    ref={this.inputRef}/>
            </WithClass>
        );
    }

    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount');
    }
};

// Defines the props types that the component expects to be passed
Person.propTypes = {
    clickEvent: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changeEvent: PropTypes.func
};

export default Person;