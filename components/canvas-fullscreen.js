import { Component } from 'react';

const strokeColor = {
    h: 200,
    s: 50,
    l: 50
};

const offsetYOverflow = -60;

export default class Home extends Component {

    handleResize = (canvas) => {
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
    }

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

        canvas.addEventListener('resize', () => this.handleResize(canvas));
        window.addEventListener('mousedown', () => this.handleMouseDown(wave));
        window.addEventListener('mouseup', () => this.handleMouseUp(wave));

        const animate = () => {
            requestAnimationFrame(animate);
            // if (theme.title === "Dark Theme") {
            c.fillStyle = "rgba(39, 39, 39, 0.01)";
            // } else {
            //     c.fillStyle = "rgba(255, 255, 255, 0.01)";
            // }
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
        const canvas = this.refs.canvas;
        const c = canvas.getContext('2d');

        canvas.removeEventListener('resize', () => this.handleResize(canvas));
        window.removeEventListener('mousedown', () => this.handleMouseDown(wave));
        window.removeEventListener('mouseup', () => this.handleMouseUp(wave));
    }

    render() {
        return (
            <canvas ref="canvas">
                <style jsx>{`
                    margin-top: -1rem;
                `}</style>
            </canvas>
        );
    }
}
