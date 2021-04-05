import { useContext, useState, useEffect, useRef } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { statuses, ApplicationStatusContext } from '../context/ApplicationStatusContext'
import Canvas from '../components/Canvas'
import Toolbar from '../components/Toolbar'
import Profile from '../components/profile/Profile'
import Footer from '../components/Footer'
import SideDrawer from '../components/sidedrawer/SideDrawer'
import Backdrop from '../components/sidedrawer/Backdrop'
import Fade from '../components/animations/Fade'

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
                    font-family: sans-serif;
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
                }

                *::selection {
                    background: var(--highlight);
                }
                
                #content {
                    transition: 0.6s filter;
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

                // Slide
                @keyframes slideUp {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(-5px);
                    }
                }

                @keyframes slideDown {
                    0% {
                        transform: translateY(-5px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    )
}

export default Home;