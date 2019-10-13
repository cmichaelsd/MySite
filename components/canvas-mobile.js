import { Component, Fragment } from 'react';
import UserContext from './usercontext';

let particles = undefined;

let mouse = {
    x: undefined,
    y: undefined
};

let prevMouse = {
    x: undefined,
    y: undefined
};

const offsetYOverflow = -60;

export default class CanvasMobile extends Component {

    static contextType = UserContext;

    randomIntFromRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    randomColor = () => {
        const colors = [
            '#B8BCFF',
            '#A7BCE8',
            '#C5E7FF',
            '#A7DEE8',
            '#B8FFF7',
        ];

        return colors[Math.floor(Math.random() * colors.length)];
    };

    distance = (x1, y1, x2, y2) => {
        const xDist = x2 - x1;
        const yDist = y2 - y1;

        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    };

    rotate = (velocity, angle) => {
        const rotatedVelocities = {
            x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
            y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
        };

        return rotatedVelocities;
    };

    resolveCollision = (particle, otherParticle) => {
        const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
        const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

        const xDist = otherParticle.x - particle.x;
        const yDist = otherParticle.y - particle.y;

        // Prevent accidental overlap of particles
        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

            // Grab angle between the two colliding particles
            const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

            // Store mass in var for better readability in collision equation
            const m1 = particle.mass;
            const m2 = otherParticle.mass;

            // Velocity before equation
            const u1 = this.rotate(particle.velocity, angle);
            const u2 = this.rotate(otherParticle.velocity, angle);

            // Velocity after 1d collision equation
            const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
            const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

            // Final velocity after rotating axis back to original location
            const vFinal1 = this.rotate(v1, -angle);
            const vFinal2 = this.rotate(v2, -angle);

            // Swap particle velocities for realistic bounce effect
            particle.velocity.x = vFinal1.x;
            particle.velocity.y = vFinal1.y;

            otherParticle.velocity.x = vFinal2.x;
            otherParticle.velocity.y = vFinal2.y;
        }
    };

    Particle = (c, x, y, radius, color) => {
        let particle = {
            friction: 0.5,
            x: x,
            y: y,
            velocity: {
                x: (Math.random() - 0.5) * 5,
                y: (Math.random() - 0.5) * 5
            },
            radius: radius,
            color: color,
            mass: 1,
            opacity: 0,
            lastPoint: {
                x: x,
                y: y
            },
            draw: () => {
                c.beginPath();
                c.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false)
                c.save();
                c.globalAlpha = particle.opacity;
                c.fillStyle = particle.color;
                c.fill();
                c.restore();
                c.strokeStyle = particle.color;
                c.stroke();
                c.closePath();
            },
            update: (particles) => {
                particle.draw();
                for (let i = 0; i < particles.length; i++) {
                    if (particle === particles[i]) continue;
                    if (this.distance(particle.x, particle.y, particles[i].x, particles[i].y) - particle.radius * 2 < 0) {
                        this.resolveCollision(particle, particles[i]);
                    }
                }

                if (particle.x - particle.radius <= 0 || particle.x + particle.radius >= innerWidth) {
                    particle.velocity.x = -particle.velocity.x * particle.friction;
                }
                if (particle.y - particle.radius <= 0 || particle.y + particle.radius >= innerHeight) {
                    particle.velocity.y = -particle.velocity.y * particle.friction;
                }

                // mouse collision
                if (this.distance(mouse.x, mouse.y, particle.x, particle.y) < 120 && particle.opacity < 0.2) {
                    const displaceX = prevMouse.x - mouse.x;
                    const displaceY = prevMouse.y - mouse.y;
                    if (displaceX || displaceY) {
                        particle.velocity.x -= displaceX < 0 ? -0.5 : 0.5;
                        particle.velocity.y -= displaceY < 0 ? -0.5 : 0.5;
                    }
                    particle.opacity += 0.02;
                } else if (particle.opacity > 0) {
                    particle.opacity -= 0.02;
                    particle.opacity = Math.max(0, particle.opacity);
                }

                particle.x += particle.velocity.x;
                particle.y += particle.velocity.y;
            }
        }
        return particle;
    };

    init = () => {
        const canvas = this.refs.canvas;
        const c = canvas.getContext('2d');

        particles = [];

        for (let i = 0; i < 500; i++) {
            const radius = 8;
            let x = this.randomIntFromRange(radius, canvas.width - radius);
            let y = this.randomIntFromRange(radius, canvas.height - radius);
            const color = this.randomColor();

            if (i !== 0) {
                for (let j = 0; j < particles.length; j++) {
                    if (this.distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
                        x = this.randomIntFromRange(radius, canvas.width - radius);
                        y = this.randomIntFromRange(radius, canvas.height - radius);
                        j = -1;
                    }
                }
            }
            particles.push(this.Particle(c, x, y, radius, color));
        }
    };

    handleMouseDown = (event) => {
        event.preventDefault();
        mouse.x = event.touches[0].clientX;
        mouse.y = event.touches[0].clientY;
    };

    handleResize = () => {
        const canvas = this.refs.canvas;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight + offsetYOverflow;
        this.init();
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

        setInterval(() => {
            prevMouse.x = mouse.x
            prevMouse.y = mouse.y
        }, 200);

        // Event Listeners
        window.addEventListener('touchmove', this.handleMouseDown, { passive: false });
        window.addEventListener('resize', this.handleResize);

        // Implementation
        this.init();

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update(particles);
            })
        }
        this.init();
        animate();
    };

    componentWillUnmount = () => {
        window.removeEventListener('mousedown', this.handleMouseDown);
        window.removeEventListener('resize', this.handleResize);

        particles = [];

        mouse = {
            x: undefined,
            y: undefined
        };

        prevMouse = {
            x: undefined,
            y: undefined
        };
    };

    render() {
        let bg = this.hexToRgb(this.context.theme.textColor);
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
                        pointer-events: none;
                        font-size: 40px;
                        animation: glow 5s ease-out forwards;
                    }
                    canvas {
                        margin-top: -1rem;
                    }
                    @keyframes glow {
                        from {
                            color: rgba(${bg.r}, ${bg.g}, ${bg.b}, 1);
                        }
                        to {
                            color: rgba(${bg.r}, ${bg.g}, ${bg.b}, 0);
                        }
                    }
                `}</style>
            </Fragment>
        );
    }
}