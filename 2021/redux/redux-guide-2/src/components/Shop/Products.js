import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useSelector} from 'react-redux';

const Products = (props) => {
  const products = useSelector(state => state.product.items);

  const toProductItem = () => {
    return products.map((product, index) => {
      return <ProductItem key={index} title={product.title}
        price={product.price} description={product.description}/>;
    });
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {toProductItem()}
      </ul>
    </section>
  );
};

export default Products;
