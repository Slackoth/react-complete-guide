import {useParams} from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();

    return <section>
        <h1>Details</h1>
        <p>{params.id}</p>
    </section>;
};

export default ProductDetail;