import { Component } from 'react';

export default class CanvasMobile extends Component {

    randomIntFromRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    randomColor = (colors) => {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    distance = (x1, y1, x2, y2) => {
        const xDist = x2 - x1;
        const yDist = y2 - y1;

        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    }

    rotate = (velocity, angle) => {
        const rotatedVelocities = {
            x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
            y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
        };

        return rotatedVelocities;
    }

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
    }

    componentDidMount = () => {
        const canvas = this.refs.canvas;
        const c = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 60;

        const mouse = {
            x: undefined,
            y: undefined
        }

        const colors = [
            '#7A481F',
            '#FBBD8A',
            '#FA923F',
            '#7A5C43',
            '#C77532',
        ];

        const prevMouse = {
            x: undefined,
            y: undefined
        }

        const friction = 0.5

        setInterval(() => {
            prevMouse.x = mouse.x
            prevMouse.y = mouse.y
        }, 200);

        // Event Listeners
        addEventListener('mousemove', event => {
            mouse.x = event.clientX
            mouse.y = event.clientY
        });

        addEventListener('resize', () => {
            canvas.width = innerWidth
            canvas.height = innerHeight

            init();
        });

        // Objects
        const that = this;
        function Particle(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.velocity = {
                x: (Math.random() - 0.5) * 5,
                y: (Math.random() - 0.5) * 5
            };
            this.radius = radius;
            this.color = color;
            this.mass = 1;
            this.opacity = 0;
            this.lastPoint = {
                x: x,
                y: y
            };
            this.draw = function () {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
                // c.strokeStyle = this.color;
                // c.lineWidth = this.radius;
                // c.moveTo(this.lastPoint.x, this.lastPoint.y);
                // c.lineTo(this.x, this.y);
                // c.stroke();
                c.save();
                c.globalAlpha = this.opacity;
                c.fillStyle = this.color;
                c.fill();
                c.restore();
                c.strokeStyle = this.color;
                c.stroke();
                c.closePath();
            };
            this.update = function (particles) {

                this.draw();

                for (let i = 0; i < particles.length; i++) {
                    if (this === particles[i]) continue;

                    if (that.distance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) {
                        that.resolveCollision(this, particles[i]);
                    }
                }

                if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
                    this.velocity.x = -this.velocity.x * friction;
                }
                if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
                    this.velocity.y = -this.velocity.y * friction;
                }

                // mouse collision
                if (that.distance(mouse.x, mouse.y, this.x, this.y) < 120 && this.opacity < 0.2) {
                    const displaceX = prevMouse.x - mouse.x;
                    const displaceY = prevMouse.y - mouse.y;
                    if (displaceX || displaceY) {
                        this.velocity.x -= displaceX < 0 ? -0.5 : 0.5;
                        this.velocity.y -= displaceY < 0 ? -0.5 : 0.5;
                    }
                    this.opacity += 0.02;
                } else if (this.opacity > 0) {
                    this.opacity -= 0.02;

                    this.opacity = Math.max(0, this.opacity);
                }

                this.x += this.velocity.x;
                this.y += this.velocity.y;
            };
        }



        // Implementation
        let particles;
        const init = () => {
            particles = [];

            for (let i = 0; i < 600; i++) {
                const radius = 4;
                let x = this.randomIntFromRange(radius, canvas.width - radius);
                let y = this.randomIntFromRange(radius, canvas.height - radius);
                const color = this.randomColor(colors);

                if (i !== 0) {
                    for (let j = 0; j < particles.length; j++) {
                        if (this.distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
                            x = this.randomIntFromRange(radius, canvas.width - radius);
                            y = this.randomIntFromRange(radius, canvas.height - radius);

                            j = -1;
                        }
                    }
                }
                particles.push(new Particle(x, y, radius, color));
            }
        }

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update(particles);
            })
        }

        init();
        animate();
    }

    render() {
        return (<canvas ref="canvas">
            <style jsx>{`
                margin-top: -1rem;
            `}</style>
        </canvas>);
    }
}