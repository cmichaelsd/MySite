import { Component } from 'react';
import Head from 'next/head';
import CanvasFullscreen from '../components/canvas-fullscreen';
import CanvasMobile from '../components/canvas-mobile';

export default class Home extends Component {
    state = {
        innerWidth: undefined,
        innerHeight: undefined
    };

    handleWindowResize = () => {
        const { innerWidth, innerHeight } = window;
        this.setState({ innerWidth, innerHeight });
    };

    componentDidMount = () => {
        window.addEventListener('resize', this.handleWindowResize);
        this.setState({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
        });
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleWindowResize);
    };

    render() {
        return (
            <div>
                <Head>
                    <title>Coles Michaels - Home</title>
                </Head>
                {
                    this.state.innerWidth >= 768 ?
                        <CanvasFullscreen />
                        :
                        <CanvasMobile />
                }
                <style jsx>{`
                    * {
                        overscroll-behavior-y: none;
                    }
                `}</style>
            </div>
        );
    }
}


