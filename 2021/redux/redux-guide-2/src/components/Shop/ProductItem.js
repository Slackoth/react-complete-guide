import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.add({title: title, price: price, description: description}));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

/* const item = {title: title, price: price, description: description};
    const index = items.findIndex(cartItem => cartItem.title === item.title);
    // The array spread operator makes a shallow copy of the state.items array, 
    // but does not make a copy of the objects inside of that array.
    const newItems = items.map(item => {return {...item}});
    
    if(index !== -1) {
      newItems[index].quantity += 1;
      newItems[index].total += item.price;
    }
    else {
      const newItem = {...item, quantity: 1, total: item.price}
      newItems.push(newItem);
    }

    dispatch(cartActions.replace(newItems)); */
