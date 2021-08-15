import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { AuthContext } from './store/auth-context';

function App() {
  const context = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          {!context.isLoggedIn && <AuthPage />}
          {context.isLoggedIn && <Redirect to='/'/>}
        </Route>
        <Route path='/profile'>
          {context.isLoggedIn && <UserProfile />}
          {!context.isLoggedIn && <Redirect to='/auth'/>}
        </Route>
        <Route path='*'>
          <Redirect to='/'/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;