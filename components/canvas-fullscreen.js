import { Component } from 'react';

export default class Home extends Component {
    componentDidMount = () => {
        const canvas = this.refs.canvas;
        const c = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 100;
        const wave = {
            y: canvas.height / 2,
            length: 0.005,
            amplitude: 245,
            frequency: 0.02
        };

        const strokeColor = {
            h: 200,
            s: 50,
            l: 50
        };

        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight - 100;
        });

        window.addEventListener('mousedown', function () {
            if (wave.frequency <= 1) {
                wave.frequency += 0.03;
            }
        });

        window.addEventListener('mouseup', function () {
            if (wave.frequency > 0.01) {
                wave.frequency -= 0.03;
            }
        });


        let increment = wave.frequency;
        function animate() {
            requestAnimationFrame(animate)
            c.fillStyle = "rgba(39, 39, 39, 0.01)";
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

    render() {
        return (
            <div>
                <canvas ref="canvas"></canvas>
            </div>
        )
    }
}
