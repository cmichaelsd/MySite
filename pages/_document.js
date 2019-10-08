import Document, { Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                        /*
                            ██████╗ ██████╗ ██╗     ███████╗    ███╗   ███╗██╗ ██████╗██╗  ██╗ █████╗ ███████╗██╗     ███████╗
                           ██╔════╝██╔═══██╗██║     ██╔════╝    ████╗ ████║██║██╔════╝██║  ██║██╔══██╗██╔════╝██║     ██╔════╝
                           ██║     ██║   ██║██║     █████╗      ██╔████╔██║██║██║     ███████║███████║█████╗  ██║     ███████╗
                           ██║     ██║   ██║██║     ██╔══╝      ██║╚██╔╝██║██║██║     ██╔══██║██╔══██║██╔══╝  ██║     ╚════██║
                           ╚██████╗╚██████╔╝███████╗███████╗    ██║ ╚═╝ ██║██║╚██████╗██║  ██║██║  ██║███████╗███████╗███████║
                            ╚═════╝ ╚═════╝ ╚══════╝╚══════╝    ╚═╝     ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝
                        */
                        `}} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="Cole Michaels' Personal Website" />
                    <meta name="google-site-verification" content="YRxyXLqTUYrXLcqB0512DoyIKT8vtDamWOf6Kv4Z8go" />
                    <link rel="shortcut icon" href="/static/head/favicon.ico" />
                    <link rel="shortcut icon" href="/static/head/favicon-16x16.webp" sizes="16x16" type="image/webp" />
                    <link rel="shortcut icon" href="/static/head/favicon-32x32.webp" sizes="32x32" type="image/webp" />
                    <link rel="apple-touch-icon" href="/static/head/apple-touch-icon.webp" />
                    <link rel="me" href="mailto:cmichaelsd@gmail.com"></link>
                    <link href="https://fonts.googleapis.com/css?family=Karla&display=swap" rel="stylesheet"></link>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_TRACKING_ID}');
                            `
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}