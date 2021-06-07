import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from './components/UI/LoadingSpinner';
// import NewQuote from "./pages/quotes/NewQuote";
// import QuoteDetail from "./pages/quotes/QuoteDetail";
// import Quotes from "./pages/quotes/Quotes";
// import NotFound from './pages/template/NotFound';

// Lazy Loading (Optimize)
// Through this sintax, the component will be downloaded by 
// react only when it's needed
// The download could be delayed a few seconds so we need to provide a
// a fallback UI to replace the component while it's being downloaded
const NewQuote = React.lazy(() => import('./pages/quotes/NewQuote'));
const QuoteDetail = React.lazy(() => import('./pages/quotes/QuoteDetail'));
const NotFound = React.lazy(() => import('./pages/template/NotFound'));
const Quotes = React.lazy(() => import('./pages/quotes/Quotes'));

function App() {
  return (
      <Layout>
        <Suspense fallback={<div className='centered'><LoadingSpinner/></div>}>
          <Switch>
            <Route path='/' exact><Redirect to='/quotes'/></Route>
            <Route path='/quotes' exact><Quotes/></Route>
            <Route path='/quotes/:id'><QuoteDetail/></Route>
            <Route path='/new-quote'><NewQuote/></Route>
            <Route path='*'><NotFound/></Route>
          </Switch>
        </Suspense>
      </Layout>
  );
}

export default App;