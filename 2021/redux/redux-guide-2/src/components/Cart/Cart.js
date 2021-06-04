import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector(state => state.cart.items);

  const toCartItem = () => {
    return items.map((item, index) => {
      return <CartItem key={index} item={{...item}}/>
    });
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {toCartItem()}
      </ul>
    </Card>
  );
};

export default Cart;
