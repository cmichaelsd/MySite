import { useState, useEffect } from 'react'
import Hamburger from './svgs/Hamburger'
import PaintRoller from './svgs/PaintRoller'

function Toolbar() {
    const [navPos, setNavPos] = useState(0);

    let prevScrollPos = null;
    let scrollPos = null;

    const handleScroll = () => {
        scrollPos = window.pageYOffset;

        if (prevScrollPos < scrollPos && prevScrollPos > 60) {
            setNavPos(-56);
        } else {
            setNavPos(0);
        }

        prevScrollPos = window.pageYOffset;
    }

    useEffect(() => {
        prevScrollPos = window.pageYOffset;
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <>
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                        <Hamburger />
                    </div>
                    <div className="spacer"></div>
                    <div className="toolbar__logo">
                        <span>Cole Michaels</span>
                    </div>
                    <div className="spacer-middle"></div>
                    <div className="toolbar__navigation--items">
                        <ul>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#experience">Experience</a>
                            </li>
                            <li>
                                <a href="#education">Education</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                            <li>
                                <PaintRoller enableHover={true} />
                            </li>
                        </ul>
                    </div>
                    <div className="spacer-middle"></div>
                    <div className="spacer-end"></div>
                </nav>
            </header>

            <style jsx>{`
                .toolbar {
                    position: fixed;
                    top: ${navPos}px;
                    width: 100%;
                    background: var(--toneOne);
                    height: 56px;
                    z-index: 200;
                    transition: top 0.3s;
                    box-shadow: 0 0 0.625rem 0 rgba(0,0,0,0.1);
                }

                .toolbar__navigation {
                    display: flex;
                    height: 100%;
                    align-items: center;
                    padding: 0 1rem;
                }

                .spacer {
                    flex: .5;
                }

                .spacer-middle {
                    flex: 0.15;
                }

                .spacer-end {
                    flex: 0.3;
                }

                .toolbar__navigation--items ul {
                    list-style: none;
                    display: flex;
                }

                .toolbar__navigation--items li {
                    padding: 0 2rem;
                    color: var(--textColor);
                    text-decoration: none;
                }

                .toolbar__navigation--items li:hover,
                .toolbar__navigation--items li:active {
                    color: var(--highlight);
                }

                .toolbar__logo {
                    color: var(--textColor);
                    text-decoration: none;
                    font-size: 1.3rem;
                    text-transform: uppercase;
                }

                @media (max-width: 768px) {
                    .toolbar {
                        box-shadow: none;
                    }

                    .toolbar__navigation--items {
                        display: none;
                    }

                    .spacer {
                        flex: 0.1;
                    }
                }

                @media (min-width: 769px) {
                    .toolbar__toggle-button {
                        display: none;
                    }

                    .toolbar__logo {
                        margin-left: 0;
                    }
                }
            `}</style>
        </>
    )
}

export default Toolbar;