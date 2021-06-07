import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import styles from './QuoteList.module.css';

/**
 * If compareFunction(a, b) returns a value > than 0, sort b before a.
 * If compareFunction(a, b) returns a value ≤ 0, leave a and b in the same order
 */
const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isAscending = queryParams.get('sort') === 'asc';
  const sortedQuotes = sortQuotes(props.quotes, isAscending);
  
  const toggleSortingHandler = () => {
    const sort = isAscending ? 'desc' : 'asc';
    
    // Remember, it will rerender the component
    history.push({
      pathname: location.pathname,
      search: `?sort=${sort}`
    });
    
    // history.push(`${location.pathname}?sort=${sort}`);
  };
  
  return (
    <Fragment>
      <div className={styles.sorting}>
        <button onClick={toggleSortingHandler}>Sort {isAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={styles.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
