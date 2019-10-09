import Head from 'next/head';
import { NextPage } from 'next';
import PageTemplate from "../layouts/page-template";

const ErrorPage: NextPage = () => {
    return (
        <PageTemplate title="404">
            <Head>
                <title>Cole Michaels - 404</title>
            </Head>
            <p className="coco">My advanced team of software chimps is hard at work trying to correct this error!</p>
            <style jsx>{`
                .coco {
                    text-align: center;
                }
            `}</style>
        </PageTemplate>
    );
}

export default ErrorPage;