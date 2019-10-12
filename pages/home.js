import { Component } from 'react';
import CanvasFullscreen from '../components/canvas-fullscreen';
import CanvasMobile from '../components/canvas-mobile';

export default class Home extends Component {
    state = {
        innerWidth: undefined,
        innerHeight: undefined
    }

    componentDidMount = () => {
        window.addEventListener('resize', () => {
            const { innerWidth, innerHeight } = window;
            this.setState({
                innerWidth,
                innerHeight
            });
        });

        this.setState({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.innerWidth > 768 ?
                        <CanvasFullscreen /> :
                        <CanvasMobile />
                }
            </div>
        );
    }
}


