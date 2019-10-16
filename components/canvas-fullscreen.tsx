import { Component, Fragment } from 'react';
import UserContext from './usercontext';
import { StrokeColorProps, WaveProps } from '../types-dir';



export default class CanvasFullScreen extends Component {

    static contextType: any = UserContext;

    public strokeColor: StrokeColorProps = {
        h: 200,
        s: 50,
        l: 50
    };

    public offsetYOverflow: number = -60;

    public canvas: any = undefined;

    public c: any = undefined;

    public wave: undefined | WaveProps = undefined;

    handleResize = (): void => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight + this.offsetYOverflow;
        if (this.wave) {
            this.wave.y = this.canvas.height / 2;
        }
    };

    handleMouseDown = (): void => {
        if (this.wave && this.wave.frequency <= 1) {
            this.wave.frequency += 0.03;
        }
    };

    handleMouseUp = (): void => {
        if (this.wave && this.wave.frequency > 0.01) {
            this.wave.frequency -= 0.03;
        }
    };

    hexToRgb = (hex: string): any => {
        var shorthandRegex: any = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result: any = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    };

    componentDidMount = (): void => {
        this.canvas = this.refs.canvas;
        this.c = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight + this.offsetYOverflow;
        this.wave = {
            y: this.canvas.height / 2,
            length: 0.010,
            amplitude: 260,
            frequency: 0.02
        };
        let increment: number = this.wave.frequency;

        window.addEventListener('resize', this.handleResize);
        window.addEventListener('mousedown', this.handleMouseDown);
        window.addEventListener('mouseup', this.handleMouseUp);

        const animate = (): void => {
            let bg: any = this.hexToRgb(this.context.theme.toneOne);
            requestAnimationFrame(animate);

            this.c.fillStyle = `rgba(${bg.r}, ${bg.g}, ${bg.b}, 0.01)`;

            this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.c.beginPath();
            this.c.moveTo(0, this.canvas.height / 2);
            if (this.wave) {
                for (let i: number = 0; i < this.canvas.width; i++) {
                    this.c.lineTo(i, this.wave.y + Math.sin(i * this.wave.length + increment) * (this.wave.amplitude * Math.sin(increment)));
                }
            }
            this.c.strokeStyle = `hsl(${Math.abs(this.strokeColor.h * Math.sin(increment))}, ${this.strokeColor.s}%, ${this.strokeColor.l}%)`;
            this.c.stroke();
            if (this.wave) {
                increment += this.wave.frequency;
            }
        }
        animate();
    }

    componentWillUnmount = (): void => {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('mousedown', this.handleMouseDown);
        window.removeEventListener('mouseup', this.handleMouseUp);
    }

    render() {
        let bg: any = this.hexToRgb(this.context.theme.toneOne);
        return (
            <Fragment>
                <div>
                    <h1>Welcome</h1>
                </div>
                <canvas ref="canvas"></canvas>
                <style jsx>{`
                    div {
                        position: fixed;
                        height: 82%;
                        width: 100%;
                        z-index: 50;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: rgba(${bg.r}, ${bg.g}, ${bg.b}, 0.5);
                        pointer-events: none;
                        font-size: 50px;
                    }
                    canvas {
                        margin-top: -1rem;
                    }
                `}</style>
            </Fragment>
        );
    }
}
