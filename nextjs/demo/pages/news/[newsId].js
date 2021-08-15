import { useRouter } from 'next/router';

const NewsDetail = () => {
    const router = useRouter();

    console.log(router.query.newsId);

    return <h1>News Detail</h1>
};

export default NewsDetail;