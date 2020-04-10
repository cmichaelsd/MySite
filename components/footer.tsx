import { Component } from 'react';
import UserContext from './usercontext';
import { ThemeContent } from '../types-dir';

export default class Footer extends Component {
    static contextType = UserContext;
    state = {
        footerPos: 0
    }

    componentDidMount = (): void => {
        this.setState({ prevScrollPos: window.pageYOffset });
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = (): void => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (): void => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.setState({ footerPos: 0 });
        } else {
            this.setState({ footerPos: -50 });
        }
    }

    render() {
        const { theme }: { theme: ThemeContent } = this.context;
        return (
            <footer>
                <p>
                    Made in Los Angeles, CA
                </p>
                <style jsx>{`
                    footer {
                        position: fixed;
                        background: ${theme.toneOne};
                        bottom: ${this.state.footerPos}px;
                        width: 100%;
                        color: ${theme.textColor};
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 0.8rem;
                        transition: bottom 0.3s;
                    }
                `}</style>
            </footer>
        );
    }
}