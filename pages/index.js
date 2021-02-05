import { useContext, useState, useEffect, useRef } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { statuses, ApplicationStatusContext } from '../context/ApplicationStatusContext'
import Canvas from '../components/Canvas'
import Toolbar from '../components/Toolbar'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
import SideDrawer from '../components/SideDrawer'
import Backdrop from '../components/Backdrop'
import Fade from '../components/animations/Fade'

function Home() {
    const { theme } = useContext(ThemeContext);

    const { status } = useContext(ApplicationStatusContext);

    const [showCanvas, setShowCanvas] = useState(true);

    const [showProfile, setShowProfile] = useState(false);

    const mounted = useRef();

    const DisplayBackdrop = () => {
        if (status === statuses.NAVIGATION_DRAWER_OPEN) {
            return <Backdrop />;
        } else {
            return <></>;
        }
    }

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            setTimeout(() => setShowCanvas(showCanvas => !showCanvas), 5000);
            setTimeout(() => setShowProfile(showProfile => !showProfile), 7000);
        }
    })

    return (
        <>
            <main id="main">
                <Toolbar />
                <SideDrawer />
                <DisplayBackdrop />
                <Fade show={showCanvas}>
                    <Canvas />
                </Fade>
                <Fade show={showProfile}>
                    <Profile />
                </Fade>
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

                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                @keyframes fadeOut {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            `}</style>
        </>
    )
}

export default Home;