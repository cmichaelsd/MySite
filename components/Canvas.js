import { useEffect, useRef, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ApplicationStatusContext } from '../context/ApplicationStatusContext'
import { Events } from '../events'
import { hexToRgb } from '../helpers'

function Canvas() {
    const { theme } = useContext(ThemeContext);

    const { changeStatus } = useContext(ApplicationStatusContext);

    const canvasRef = useRef(null);

    const mounted = useRef();

    const OFFSET_Y_OVERFLOW = -60;

    const strokeColor = { h: 200, s: 50, l: 50 };

    const wave = {
        y: null,
        frequency: 0.02,
        length: 0.008,
        amplitude: 260
    };

    let ctx = null;

    /**
    const evaluateWave = () => {
        if (canvasRef.current.width >= 1814) {
            wave.length = 0.010;
            wave.amplitude = 260;
        } else if (canvasRef.current.width >= 968) {
            wave.length = 0.005;
            wave.amplitude = 360;
        }
    }
    */

    const handleResize = () => {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight + OFFSET_Y_OVERFLOW;

        // evaluateWave();
        wave.y = canvasRef.current.height / 2;
    }

    let animate = (length, amplitude, increment) => {
        // The glitch effect is created by animating with external length, amplitube, and increment (wave.frequency)
        // To return to a sin wave remove 'wave.' from all scoped variables
        const bg = hexToRgb(theme.toneTwo);
        const DRAW_RATE = 0.2;

        requestAnimationFrame(() => animate(wave.length, wave.amplitude, wave.frequency));

        if (canvasRef.current) {
            ctx.fillStyle = `rgba(${bg.r}, ${bg.g}, ${bg.b}, 0.01)`;
            ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            ctx.beginPath();
            ctx.moveTo(0, canvasRef.current.height / 2);

            for (let i = 0; i < canvasRef.current.width; i += DRAW_RATE) {
                ctx.lineTo(i, wave.y + Math.sin(i * wave.length + wave.frequency) * (wave.amplitude * Math.sin(wave.frequency)));
            }

            for (let j = canvasRef.current.width; j > 0; j -= DRAW_RATE) {
                ctx.lineTo(j, wave.y - Math.sin(j * wave.length + wave.frequency) * (wave.amplitude * Math.sin(wave.frequency)));
            }

            ctx.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(wave.frequency))}, ${strokeColor.s}%, ${strokeColor.l}%)`;
            ctx.stroke();

            wave.frequency += wave.frequency;
        }
    }

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            window.addEventListener('resize', handleResize);
        }

        ctx = canvasRef.current.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight + OFFSET_Y_OVERFLOW;

        // evaluateWave();

        wave.y = canvasRef.current.height / 2;

        animate(wave.length, wave.amplitude, wave.frequency);

        return () => {
            window.removeEventListener('resize', handleResize);
            animate = (length, amplitude, increment) => {
                return;
            }
        }
    }, [])

    useEffect(() => {
        // setTimeout(() => changeStatus(Events.INITIAL_LOADING_COMPLETE), 5000);
    }, [])

    return (
        <>
            <div id="hover-text-container">
                <h1 id="hover-text">Cole Michaels</h1>
                <canvas ref={canvasRef} id="canvas"></canvas>
            </div>

            <style jsx>{`
                #hover-text-container {
                    position: relavtive;
                }

                #hover-text {
                    position: absolute;
                    left: 50%;
                    top: 46%;
                    transform: translate(-50%, -50%);
                    margin: 0;
                    white-space: nowrap;
                    color: ${theme.toneTwo}80;
                    pointer-events: none;
                    font-size: 10rem;
                }

                #canvas {
                    height: 100%;
                }

                @media (max-width: 968px) {
                    #hover-text {
                        font-size: 3rem;
                    }
                }
            `}</style>
        </>
    )
}

export default Canvas
