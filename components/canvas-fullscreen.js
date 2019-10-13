import { Component, Fragment } from 'react';
import UserContext from './usercontext';

const strokeColor = {
    h: 200,
    s: 50,
    l: 50
};

const offsetYOverflow = -60;

export default class CanvasFullScreen extends Component {

    static contextType = UserContext;

    handleResize = () => {
        const canvas = this.refs.canvas;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight + offsetYOverflow;
    };

    handleMouseDown = (wave) => {
        if (wave.frequency <= 1) {
            wave.frequency += 0.03;
        }
    };

    handleMouseUp = (wave) => {
        if (wave.frequency > 0.01) {
            wave.frequency -= 0.03;
        }
    };

    hexToRgb = (hex) => {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };

    componentDidMount = () => {
        const canvas = this.refs.canvas;
        const c = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight + offsetYOverflow;

        const wave = {
            y: canvas.height / 2,
            length: 0.005,
            amplitude: 245,
            frequency: 0.02
        };

        let increment = wave.frequency;

        window.addEventListener('resize', this.handleResize);
        window.addEventListener('mousedown', () => this.handleMouseDown(wave));
        window.addEventListener('mouseup', () => this.handleMouseUp(wave));

        const animate = () => {
            let bg = this.hexToRgb(this.context.theme.toneOne);
            requestAnimationFrame(animate);

            c.fillStyle = `rgba(${bg.r}, ${bg.g}, ${bg.b}, 0.01)`;

            c.fillRect(0, 0, canvas.width, canvas.height);
            c.beginPath();
            c.moveTo(0, canvas.height / 2);
            for (let i = 0; i < canvas.width; i++) {
                c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * (wave.amplitude * Math.sin(increment)));
            }
            c.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))}, ${strokeColor.s}%, ${strokeColor.l}%)`;
            c.stroke();
            increment += wave.frequency;
        }
        animate();
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('mousedown', () => this.handleMouseDown(wave));
        window.removeEventListener('mouseup', () => this.handleMouseUp(wave));
    }

    render() {
        let bg = this.hexToRgb(this.context.theme.toneOne);
        return (
            <Fragment>
                <div>
                    <h1>Welcome</h1>
                </div>
                <canvas ref="canvas"></canvas>
                <style jsx>{`
                    div {
                        position: fixed;
                        height: 80%;
                        width: 100%;
                        z-index: 50;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: rgba(${bg.r}, ${bg.g}, ${bg.b}, 0.5);
                        pointer-events: none;
                        font-size: 60px;
                    }
                    canvas {
                        margin-top: -1rem;
                    }
                `}</style>
            </Fragment>
        );
    }
}
