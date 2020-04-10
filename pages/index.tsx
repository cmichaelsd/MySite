import { Fragment, Component } from 'react';
import Head from 'next/head';
import CanvasFullscreen from '../components/canvas-fullscreen';
import { HomeState } from '../types-dir';
import HomePage from './home';

export default class Home extends Component {
    state: HomeState = {
        innerWidth: undefined,
        clicked: false
    };

    handleWindowResize = (): void => {
        const { innerWidth }: { innerWidth: number } = window;
        this.setState({ innerWidth });
    };

    componentDidMount = (): void => {
        window.addEventListener('mousedown', this.handleClick);
        window.addEventListener('resize', this.handleWindowResize);
        this.setState({ innerWidth: window.innerWidth });
    };

    componentWillUnmount = (): void => {
        window.removeEventListener('mousedown', this.handleClick);
        window.removeEventListener('resize', this.handleWindowResize);
    };

    handleClick = (): void => {
        this.setState({ clicked: true });
    };

    render() {
        return (
            <Fragment>
                <Head>
                    <title>Coles Michaels</title>
                </Head>
                {
                    this.state.innerWidth && 
                    this.state.innerWidth >= 768 &&
                    !this.state.clicked ?
                        <CanvasFullscreen />
                        :
                        <HomePage />
                }
            </Fragment>
        );
    }
}


