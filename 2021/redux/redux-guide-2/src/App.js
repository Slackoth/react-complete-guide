import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import {useDispatch, useSelector} from 'react-redux';
import Products from './components/Shop/Products';
import {Fragment, useEffect} from 'react';
import {fetchCartItems, sendCartItems} from './store/cart-actions';
import Notification from './components/Notification/Notification';

let isInitial = true;

function App() {
  const items = useSelector(state => state.cart.items);
  const changed = useSelector(state => state.cart.changed);
  const showCart = useSelector(state => state.cart.show);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      
      return;
    }

    if(changed)
      dispatch(sendCartItems(items));
  }, [items, changed, dispatch]);
  
  return (
    <Fragment>
      {notification && <Notification status={notification.status} 
        title={notification.title} message={notification.message}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
    </Layout>
    </Fragment>
  );
}

export default App;

/* useEffect(() => {
    const sendCart = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }));

      const response = await fetch('https://react-http-689f4-default-rtdb.firebaseio.com/redux-cart.json', {
        method: 'PUT',
        body: JSON.stringify(items)
      });

      if(!response.ok) 
        throw new Error('Sending cart data failed.');

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Cart data sent successfully!'
      }));
    };

    if(isInitial) {
      isInitial = false;
      return;
    }

    sendCart().catch(err => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error...',
        message: 'Sending cart data failed!'
      }));
    });
  }, [items, dispatch]);   */
