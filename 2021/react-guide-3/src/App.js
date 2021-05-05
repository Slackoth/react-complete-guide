import React, { useState } from 'react';
import Users from './components/Users/Users';
import NewUser from './components/Users/NewUser/NewUser';

const DUMMY_USERS = [
  {username: 'puppy', age: '21'}, {username: 'kitty', age: '21'}
];

function App() {
  const [state, setState] = useState(DUMMY_USERS);

  const newUserHandler = newUser => {
    setState(prevState => [newUser, ...prevState]);
  };

  return (
    <div>
      <NewUser onNewUser={newUserHandler}/>
      <Users users={state}/>
    </div>
  );
}

export default App;
