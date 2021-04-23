import React from 'react';

const signInContext = React.createContext({
    signedIn: false,
    signIn: () => {}
});

export default signInContext;