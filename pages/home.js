import { Component } from 'react';
import UserContext from '../components/usercontext';
import CanvasFullscreen from '../components/canvas-fullscreen';
import CanvasMobile from '../components/canvas-mobile';

export default class Home extends Component {
    static contextType = UserContext;
    state = {
        innerWidth: undefined,
        innerHeight: undefined
    }

    handleWindowResize = () => {
        window.addEventListener('resize', () => {
            const { innerWidth, innerHeight } = window;
            this.setState({ innerWidth, innerHeight });
        });
    }

    componentDidMount = () => {
        this.handleWindowResize();
        this.setState({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
        });
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize');
    }

    render() {
        { this.context }
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


