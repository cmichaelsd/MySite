import { Component } from 'react';
import UserContext from './usercontext';
import Hamburger from './hamburger';
import PaintRoller from './paint-roller';
import Link from './link';
import { ThemeContent } from '../types-dir';

export default class Toolbar extends Component {
    static contextType = UserContext;
    state = {
        navPos: 0,
        prevScrollPos: 0,
        scrollPos: 0
    }

    componentDidMount = (): void => {
        this.setState({ prevScrollPos: window.pageYOffset });
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = (): void => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (): void => {
        this.setState({ scrollPos: window.pageYOffset });
        if (this.state.prevScrollPos < this.state.scrollPos) {
            this.setState({ navPos: -75 })
        } else {
            this.setState({ navPos: 0 });
        }
        this.setState({ prevScrollPos: window.pageYOffset });
    }

    render() {
        const { theme }: { theme: ThemeContent } = this.context;
        return (
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                        <Hamburger />
                    </div>
                    <div className="spacer"></div>
                    <div className="toolbar__logo">
                        <Link activeClassName='active' href="/" as="/">
                            <a>Cole Michaels</a>
                        </Link>
                    </div>
                    <div className="spacer-middle"></div>
                    <div className="toolbar__navigation-items">
                        <ul>
                            <li>
                                <a href="/home#about">
                                    <a>About</a>
                                </a>
                            </li>
                            <li>
                                <a href="/home#experience">
                                    <a>Experience</a>
                                </a>
                            </li>
                            <li>
                                <a href="/home#education">
                                    <a>Education</a>
                                </a>
                            </li>
                            <li>
                                <a href="/home#contact">
                                    <a>Contact</a>
                                </a>
                            </li>
                            <li>
                                <PaintRoller />
                            </li>
                        </ul>
                    </div>
                    <div className="spacer-middle"></div>
                    <div className="spacer"></div>
                </nav>
                <style jsx global>{`
                    * {
                        padding: 0;
                    }
                    *::selection {
                        background: ${theme.highlight};
                    }
                    html, 
                    body {
                        background: ${theme.toneTwo};
                        font-family: 'Karla', sans-serif;
                        margin: 0;
                        color: ${theme.textColor};
                        overscroll-behavior: none;
                    }
                `}</style>
                <style jsx>{`
                    .toolbar {
                        position: fixed;
                        top: ${this.state.navPos}px;
                        // left: 0;
                        width: 100%;
                        background: ${theme.toneOne};
                        height: 56px;
                        z-index: 200;
                        transition: top 0.3s;
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
            </header>
        )
    }
}