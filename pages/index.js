import Header from '../components/Header';
import Head from 'next/head';

const index = () => {
    return (
        <>
            <Head>
                <title>Homepage</title>
                <meta name="description" content="Free Web tutorials" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="Thapa Technical" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
            </Head>
            <Header />
        </>
    );
};

export default index;
