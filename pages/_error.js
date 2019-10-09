import Head from 'next/head';
import PageTemplate from "../layouts/page-template";

export default function Error(props) {
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