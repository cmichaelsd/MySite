import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Cole Michaels' Personal Website" />
            <meta name="google-site-verification" content="YRxyXLqTUYrXLcqB0512DoyIKT8vtDamWOf6Kv4Z8go" />
            <link rel="shortcut icon" href="/static/head/favicon.ico" />
            <link rel="shortcut icon" href="/static/head/favicon-16x16.png" sizes="16x16" type="image/png" />
            <link rel="shortcut icon" href="/static/head/favicon-32x32.png" sizes="32x32" type="image/png" />
            <link rel="apple-touch-icon" href="/static/head/apple-touch-icon.png" />
            <link rel="me" href="mailto:cmichaelsd@gmail.com"></link>
            <link href="https://fonts.googleapis.com/css?family=Karla&display=swap" rel="stylesheet"></link>
            <title>Cole Michaels</title>
            <script dangerouslySetInnerHTML={{
                __html:
                    `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject'] = r;i[r]=i[r]||function(){
                    (i[r].q = i[r].q || []).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                
                ga('create', 'UA-XXXXX-Y', 'auto');
                ga('send', 'pageview');`}}
            />
        </Head>
    );
}