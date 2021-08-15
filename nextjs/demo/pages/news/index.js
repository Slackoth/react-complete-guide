import { Fragment } from "react";
import Link from 'next/link';

const NewsPage = () => {
    return <Fragment>
        <h1>News Page</h1>
        <ul>
            <li><Link href='/news/1'>News 1</Link></li>
            <li><Link href='/news/2'>News 2</Link></li>
            <li><Link href='/news/3'>News 3</Link></li>
        </ul>
    </Fragment>;
};

export default NewsPage;