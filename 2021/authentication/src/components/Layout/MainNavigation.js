import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const context = useContext(AuthContext);

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!context.isLoggedIn && 
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          }
          {context.isLoggedIn &&
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          }
          {context.isLoggedIn && 
            <li>
              <button onClick={context.logout}>Logout</button>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
