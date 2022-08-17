import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>John Schlesinger - About Me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <h2>About Me</h2>
            </div>
        </div>
    );
};

export default Home;
