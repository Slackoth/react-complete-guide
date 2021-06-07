import {Redirect, Route, Switch} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ProductDetail from './pages/products/product-detail/ProductDetail';
import Products from './pages/products/Products';
import Welcome from './pages/welcome/Welcome';

function App() {
  return (
    <div>
      <NavBar/>
      <main>
        {/* Switch takes the first match of a path and then stops rendering any 
        other similar paths. The property "exact" tells react router that the will
        only be rendered if it's a exact match*/}
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome'/>
          </Route>
          <Route path='/welcome'>
            <Welcome/>
          </Route>
          <Route path='/products' exact>
            <Products/>
          </Route>
          <Route path='/products/:id'>
            <ProductDetail/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
