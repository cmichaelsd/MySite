import { useState, useEffect } from 'react'
import { Hamburger } from './svgs/Hamburger'
import { PaintRoller } from './svgs/PaintRoller'
import { SlideVertical } from './animations/SlideVertical'
import { Strings } from '../res/strings'

export function Toolbar() {
    const [navPos, setNavPos] = useState(0);

    const SCROLL_TO_HIDE_TOOLBAR = 69;

    const SIZE_OF_TOOLBAR = 65;

    let prevScrollPos = null;

    let scrollPos = null;

    const headlines = [
        Strings.about_headline,
        Strings.experience_headline,
        Strings.education_headline,
        Strings.contact_headline
    ];

    const handleScroll = () => {
        scrollPos = window.pageYOffset;

        if (prevScrollPos < scrollPos && prevScrollPos > SCROLL_TO_HIDE_TOOLBAR) {
            setNavPos(-SIZE_OF_TOOLBAR);
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
            <header id="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                        <Hamburger />
                    </div>
                    <div className="spacer"></div>
                    <div className="toolbar__logo">
                        <span>{Strings.name}</span>
                    </div>
                    <div className="spacer-middle"></div>
                    <div className="toolbar__navigation--items">
                        <ul>
                            {headlines.map(headline => (
                                <li>
                                    <SlideVertical>
                                        <a href={`$${headline.toLowerCase()}`}>
                                            {headline}
                                        </a>
                                    </SlideVertical>
                                </li>
                            ))}
                            <li>
                                <SlideVertical>
                                    <PaintRoller enableHover={true} />
                                </SlideVertical>
                            </li>
                        </ul>
                    </div>
                    <div className="spacer-middle"></div>
                    <div className="spacer-end"></div>
                </nav>
            </header>

            <style jsx>{`
                #toolbar {
                    position: fixed;
                    top: ${navPos}px;
                    width: 100%;
                    background: var(--toneOne);
                    height: 65px;
                    z-index: 1;
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

                .toolbar__logo {
                    color: var(--textColor);
                    text-decoration: none;
                    font-size: 1.3rem;
                    text-transform: uppercase;
                }

                @media (max-width: 768px) {
                    #toolbar {
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
