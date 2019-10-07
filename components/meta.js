import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Cole Michaels' Personal Website" />
            <link rel="shortcut icon" href="/static/head/favicon.ico" />
            <link rel="shortcut icon" href="/static/head/favicon-16x16.png" sizes="16x16" type="image/png" />
            <link rel="shortcut icon" href="/static/head/favicon-32x32.png" sizes="32x32" type="image/png" />
            <link rel="apple-touch-icon" href="/static/head/apple-touch-icon.png" />
            <link rel="me" href="mailto:cmichaelsd@gmail.com"></link>
            <link href="https://fonts.googleapis.com/css?family=Karla&display=swap" rel="stylesheet"></link>
            <title>Cole Michaels</title>
        </Head>
    );
}