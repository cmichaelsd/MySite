import { useContext, useState, useEffect, useRef } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { statuses, ApplicationStatusContext } from '../context/ApplicationStatusContext'
import {Canvas} from '../components/Canvas'
import {Toolbar} from '../components/Toolbar'
import {Profile} from '../components/profile/Profile'
import {Footer} from '../components/Footer'
import {SideDrawer} from '../components/sidedrawer/SideDrawer'
import {Backdrop} from '../components/sidedrawer/Backdrop'
import {Fade} from '../components/animations/Fade'

function Home() {
    const { theme } = useContext(ThemeContext);

    const { status } = useContext(ApplicationStatusContext);

    const [showCanvas, setShowCanvas] = useState(true);

    const [showProfile, setShowProfile] = useState(false);

    const mounted = useRef();

    const skipCanvasAnimation = () => {
        setShowCanvas(false);
        setShowProfile(true);
    }

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
            setTimeout(() => setShowCanvas(false), 5000);
            setTimeout(() => setShowProfile(true), 7000);
        }
    })

    return (
        <>
            <main id="main">
                <SideDrawer />
                <div id="content">
                    <Toolbar />
                    <DisplayBackdrop />
                    <Fade fadeIn={false} show={showCanvas} time={2}>
                        <Canvas skipCanvasAnimation={skipCanvasAnimation} />
                    </Fade>
                    <Fade fadeOut={false} show={showProfile} time={1}>
                        <Profile />
                    </Fade>
                    <Footer />
                </div>
            </main>

            <style global jsx>{`
                :root {
                    --toneOne: ${theme.toneOne};
                    --toneTwo: ${theme.toneTwo};
                    --textColor: ${theme.textColor};
                    --highlight: ${theme.highlight};
                    --navAndFooterOffset: 30px 0 43px 0;
                }

                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: 'Courier New', monospace; // screen-play font joke
                    background: var(--toneOne);
                    color: var(--textColor);
                    overscroll-behavior: none;
                    overflow-x: hidden;
                }

                a {
                  color: inherit;
                  text-decoration: none;
                }

                .headline {
                    text-decoration: underline;
                    color: var(--highlight);
                }

                h1,h2,h3,h4,h5,h6 {
                    margin: 16px 0 0 0;
                    font-family: Helvetica;
                }

                * {
                    box-sizing: border-box;
                    transition: 0.5s color;
                    transition: 0.5s background;
                }

                *::selection {
                    background: var(--highlight);
                }
                
                #content {
                    transition: 0.6s filter;
                    overflow: hidden;
                }

                // Animations
                // Fade
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

                // Slide Horizontal
                @keyframes slideLeft {
                    0% {
                        transform: translateX(150%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                @keyframes slideRight {
                    0% {
                        transform: translateX(-150%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    )
}

export default Home;