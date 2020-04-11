import { Component } from 'react';
import UserContext from './usercontext';
import Hamburger from './hamburger';
import PaintRoller from './paint-roller';
import { ThemeContent } from '../types-dir';

export default class Toolbar extends Component {
    static contextType = UserContext;
    state = {
        navPos: 0,
        prevScrollPos: 0,
        scrollPos: 0
    };

    componentDidMount = (): void => {
        this.setState({ prevScrollPos: window.pageYOffset });
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount = (): void => {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = (): void => {
        this.setState({ scrollPos: window.pageYOffset });
        if (this.state.prevScrollPos < this.state.scrollPos && this.state.prevScrollPos > 60) {
            this.setState({ navPos: -75 })
        } else {
            this.setState({ navPos: 0 });
        }
        this.setState({ prevScrollPos: window.pageYOffset });
    };

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
                        <span>Cole Michaels</span>
                    </div>
                    <div className="spacer-middle"></div>
                    <div className="toolbar__navigation-items">
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
                                <PaintRoller />
                            </li>
                        </ul>
                    </div>
                    <div className="spacer-middle"></div>
                    <div className="spacer-end"></div>
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
                        width: 100%;
                        background: ${theme.toneOne};
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
                    .toolbar__navigation-items ul {
                        list-style: none;
                        display: flex;
                    }
                    .toolbar__navigation-items li {
                        padding: 0 2rem;
                    }
                    .toolbar__logo {
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
                        .toolbar {
                            box-shadow: none;
                        }
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