import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const items = useSelector(state => state.cart.items);

  const totalItems = () => {
    return items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0);
  };

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems()}</span>
    </button>
  );
};

export default CartButton;
