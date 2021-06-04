import CartButton from '../Cart/CartButton';
import {useDispatch} from 'react-redux';
import classes from './MainHeader.module.css';
import { cartActions } from '../../store';

const MainHeader = (props) => {
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(cartActions.show());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={showCartHandler}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
