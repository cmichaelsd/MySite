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
            let length = 0.008;
            let amplitude = 260;
            if (this.canvas.width >= 1814) {
                length = 0.010;
                amplitude = 260;
            } else if (this.canvas.width >= 968) {
                length = 0.005;
                amplitude = 360;
            }
            this.wave.y = this.canvas.height / 2;
            this.wave.length = length;
            this.wave.amplitude = amplitude;
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
        // wave length
        // default: length: 0.008 amp: 260
        // width 968: length: 0.005 amp: 360
        // width 1814: length: 0.010 amp: 260
        let length = 0.008;
        let amplitude = 260;
        if (this.canvas.width >= 1814) {
            length = 0.010;
            amplitude = 260;
        } else if (this.canvas.width >= 968) {
            length = 0.005;
            amplitude = 360;
        }
        this.wave = {
            y: this.canvas.height / 2,
            frequency: 0.02,
            length,
            amplitude
        };
        let increment: number = this.wave.frequency;

        window.addEventListener('resize', this.handleResize);

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
                for (let j: number = this.canvas.width; j > 0 ; j--) {
                    this.c.lineTo(j, this.wave.y - Math.sin(j * this.wave.length + increment) * (this.wave.amplitude * Math.sin(increment)));
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
    }

    render() {
        let bg: any = this.hexToRgb(this.context.theme.toneOne);
        return (
            <Fragment>
                <div>
                    <h1>Cole Michaels</h1>
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
