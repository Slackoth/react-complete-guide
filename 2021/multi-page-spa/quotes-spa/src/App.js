import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NewQuote from "./pages/quotes/NewQuote";
import QuoteDetail from "./pages/quotes/QuoteDetail";
import Quotes from "./pages/quotes/Quotes";
import NotFound from './pages/template/NotFound';

function App() {
  return (
      <Layout>
        <Switch>
          <Route path='/' exact><Redirect to='/quotes'/></Route>
          <Route path='/quotes' exact><Quotes/></Route>
          <Route path='/quotes/:id'><QuoteDetail/></Route>
          <Route path='/new-quote'><NewQuote/></Route>
          <Route path='*'><NotFound/></Route>
        </Switch>
      </Layout>
  );
}

export default App;
