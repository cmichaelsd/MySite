import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { statuses, ApplicationStatusContext } from '../context/ApplicationStatusContext'
import Canvas from '../components/Canvas'
import Toolbar from '../components/Toolbar'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
import SideDrawer from '../components/SideDrawer'
import Backdrop from '../components/Backdrop'

function Home() {
    const { theme } = useContext(ThemeContext);
    const { status } = useContext(ApplicationStatusContext);

    const DisplayComponentOnInitialLoad = () => {
        if (status === statuses.INITIAL_LOADING) {
            return <Canvas />;
        } else {
            return <Profile />;
        }
    }

    const DisplayBackdrop = () => {
        if (status === statuses.NAVIGATION_DRAWER_OPEN) {
            return <Backdrop />;
        } else {
            return <></>;
        }
    }

    return (
        <>
            <main id="main">
                <Toolbar />
                <SideDrawer />
                <DisplayBackdrop />
                <DisplayComponentOnInitialLoad />
                <Footer />
            </main>

            <style global jsx>{`
                :root {
                    --toneOne: ${theme.toneOne};
                    --toneTwo: ${theme.toneTwo};
                    --textColor: ${theme.textColor};
                    --highlight: ${theme.highlight};
                }

                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                    background: var(--toneOne);
                    color: var(--textColor);
                    overscroll-behavior: none;
                }

                a {
                  color: inherit;
                  text-decoration: none;
                }

                *::selection {
                    background: var(--highlight);
                }
            `}</style>
        </>
    )
}

export default Home;