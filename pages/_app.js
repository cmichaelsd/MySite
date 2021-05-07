import Head                                   from 'next/head'
import { useState }                           from 'react'
import { themes, ThemeContext }               from '@/context/ThemeContext'
import { statuses, ApplicationStatusContext } from '@/context/ApplicationStatusContext'
import { Events }                             from '@/events'

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState(themes.light);

    const [status, setStatus] = useState(statuses.INITIAL_LOADING);

    const themeValue = { theme, changeTheme };

    const statusValue = { status, changeStatus };

    function changeTheme() {
        if (theme === themes.light) {
            setTheme(themes.dark);
        } else {
            setTheme(themes.light);
        }
    }

    function changeStatus(event) {
        switch (event) {
            case Events.NAVIGATION_DRAWER_CLOSED:
            case Events.INITIAL_LOADING_COMPLETE:
                setStatus(statuses.READY);
                break;
            case Events.NAVIGATION_DRAWER_OPENED:
                setStatus(statuses.NAVIGATION_DRAWER_OPEN)
                break;
        }
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#fff" />
                <meta name="robots" content="NOODP" />
                <meta name="description" content="Cole Michaels' portfolio website, developing applications since 2018 and currently based in Seoul, KR. Fullstack Web Development, Android Development, Micro Service Architecture." />
                <link rel="icon" href="https://d3p2ju5slp2tm7.cloudfront.net/head/favicon-16x16.png" sizes="16x16" type="image/png" />
                <link rel="icon" href="https://d3p2ju5slp2tm7.cloudfront.net/head/favicon-32x32.png" sizes="32x32" type="image/png" />
                <link rel="apple-touch-icon" href="https://d3p2ju5slp2tm7.cloudfront.net/head/apple-touch-icon.png" />
                <link rel="me" href="mailto:cmichaelsd@gmail.com" />
                <title>Cole Michaels</title>
            </Head>

            <ApplicationStatusContext.Provider value={statusValue}>
                <ThemeContext.Provider value={themeValue}>
                    <Component {...pageProps} />
                </ThemeContext.Provider>
            </ApplicationStatusContext.Provider>
        </>
    )
}

export default MyApp
