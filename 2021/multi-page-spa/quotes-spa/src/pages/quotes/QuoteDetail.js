import { Fragment, useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from '../../components/comments/Comments';
import HighLightedQuote from '../../components/quotes/HighlightedQuote';
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();
    const {id} = params;
    const {sendRequest, status, data: quote, error} = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(id);
    }, [sendRequest, id]);

    // const findQuote = () => {
    //     return DUMMY_QUOTES.find(quote => quote.id === params.id);
    // };

    // const quote = findQuote();

    if(status === 'pending')
        return <div className='centered'><LoadingSpinner/></div>

    if(error)
        return <p className='centered focused'>{error}</p>

    if(!quote.text || !quote.author)
        return <p>No quote found!</p>;

    return <Fragment>
        <HighLightedQuote text={quote.text} author={quote.author}/>
        <Route path={`${match.path}`} exact>
            <div className='centered'>
                <Link className='btn--flat' 
                    to={`${match.url}/comments`}>Load Comments</Link>
            </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments/>
        </Route>
    </Fragment>;
};

export default QuoteDetail;