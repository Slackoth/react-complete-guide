import CockpitStyle from './Cockpit.module.css';
import SignInContext from '../../context/sign-in-context';
import React, {useEffect, useRef, useContext} from 'react';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const signInContext = useContext(SignInContext);

  /**
   * Equivalent of lifecycle hooks in based-class components.
   * Runs after every rendering cycle
   */
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    setTimeout(() => {
      console.log('[Cockpit.js] Takes effect only when props.persons change.')
    }, 1000);
  }, [props.personsLength]); // Takes effect only when props.personsLength is changed

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    toggleBtnRef.current.click();
  }, []); // Takes effect only the first time

  useEffect(() => {
    return () => console.log('[Cockpit.js] Removing cockpit...');
  },[]); // Takes effect when cockpit component is removed.

  useEffect(() => {
    return () => console.log('[Cockpit.js] Rendering cycle update...');
  }); // Takes effect every rendering cycle update
  
  let btnClass = '';
    const txtClass = [];

    if(props.personsLength <= 2) 
      txtClass.push(CockpitStyle.ColorRed);
     
    if(props.personsLength <= 1) 
      txtClass.push(CockpitStyle.BoldFont);

    if(props.showPersons)
        btnClass = CockpitStyle.Red

    return (
        <div className={CockpitStyle.Cockpit}>
            <h1>{props.title}</h1>
            <p className={txtClass.join(' ')}>This is really working!</p>
            {/* Way #1 to pass arguments: "this" controls what "this" will refer to
            and by binding it to "this" here outside of the function, we're binding 
            it to the class. this.switchNameHandler.bind(this, 'Pipo')*/}
            <button className={btnClass} onClick={props.clickEvent}
              ref={toggleBtnRef}>
                    Show Persons
            </button>
            <button onClick={signInContext.signIn}>Sign In</button>
            {/* <SignInContext.Consumer>
              {context => <button onClick={context.signIn}>Sign In</button>}
            </SignInContext.Consumer> */}
        </div>
    );
};

// React.memo([componentName]) -> React will memorize, 
// basically store a snapshot of this component,
// and only if its input changes, it will re-render it
export default React.memo(Cockpit);