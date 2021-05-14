import UsersContext from './store/users-context';
import UserFinder from './components/UserFinder/UserFinder';

const DUMMY_USERS = [
  {id: 'u1', name: 'puppy'}, {id: 'u2', name: 'gabs'}, {id: 'u3', name: 'kitty'}
];

function App() {
  const context = {
    users: DUMMY_USERS
  };
  return (
    <UsersContext.Provider value={context}>
      <UserFinder/>
    </UsersContext.Provider>
  );
}

export default App;
