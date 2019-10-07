import { useContext } from 'react';
import UserContext from './usercontext';
import Hamburger from './hamburger';
import PaintRoller from './paint-roller';
import Star from './star';
import Link from './link';

export default function Nav() {
    const { theme } = useContext(UserContext);
    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                    <Hamburger />
                </div>
                <div className="spacer"></div>
                <div className="toolbar__logo">
                    <Link href="/">
                        <a>Cole Michaels</a>
                    </Link>
                </div>
                <div className="spacer-middle"></div>
                <div className="toolbar__navigation-items">
                    <ul>
                        <li>
                            <Link activeClassName="active" href="/">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName="active" href="/experience">
                                <a>Experience</a>
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName="active" href="/education">
                                <a>Education</a>
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName="active" href="/skills">
                                <a>Skills</a>
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName="active" href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                        <li>
                            <PaintRoller />
                        </li>
                        <li>
                            <Star />
                        </li>
                    </ul>
                </div>
                <div className="spacer-middle"></div>
                <div className="spacer"></div>
            </nav>
            <style jsx global>{`
                * {
                    box-sizing: border-box
                    margin: 0;
                    padding: 0;
                }
                html, 
                body {
                    background: ${theme.toneTwo};
                    font-family: 'Roboto', sans-serif;
                    margin: 0;
                    color: ${theme.textColor};
                }
            `}</style>
            <style jsx>{`
                .toolbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    background: ${theme.toneOne};
                    height: 56px;
                    z-index: 200;
                }
                .toolbar__navigation {
                    display: flex;
                    height: 100%;
                    align-items: center;
                    padding: 0 1rem;
                }
                .spacer {
                    flex: 1;
                }
                .spacer-middle {
                    flex: 0.15;
                }
                .toolbar__navigation-items ul {
                    list-style: none;
                    display: flex;
                }
                .toolbar__navigation-items li {
                    padding: 0 2rem;
                }
                .toolbar__logo a {
                    color: ${theme.textColor};
                    text-decoration: none;
                    font-size: 1.3rem;
                    text-transform: uppercase;
                }
                .toolbar__navigation-items a {
                    color: ${theme.textColor};
                    text-decoration: none;
                }
                .toolbar__navigation-items a:hover,
                .toolbar__navigation-items a.active {
                    color: ${theme.highlight};
                }
                @media (max-width: 768px) {
                    .toolbar__navigation-items {
                        display: none;
                    }
                    .spacer {
                        flex: 0.3;
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
        </header>
    )
}