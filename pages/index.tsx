import { Component } from 'react';
import Head from 'next/head';
import CanvasFullscreen from '../components/canvas-fullscreen';
import { HomeState } from '../types-dir';
import About from './home';

export default class Home extends Component {
    state: HomeState = {
        innerWidth: undefined
    };

    handleWindowResize = (): void => {
        const { innerWidth }: { innerWidth: number } = window;
        this.setState({ innerWidth });
    };

    componentDidMount = (): void => {
        window.addEventListener('resize', this.handleWindowResize);
        this.setState({
            innerWidth: window.innerWidth
        });
    };

    componentWillUnmount = (): void => {
        window.removeEventListener('resize', this.handleWindowResize);
    };

    render() {
        return (
            <div>
                <Head>
                    <title>Coles Michaels - Home</title>
                </Head>
                {
                    this.state.innerWidth && this.state.innerWidth >= 768 ?
                        <CanvasFullscreen />
                        :
                        <About />
                }
            </div>
        );
    }
}


