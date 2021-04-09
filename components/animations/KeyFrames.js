function KeyFrames() {
    return (
        <style jsx global>{`
            // Fade
            @keyframes fadeIn {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }

            @keyframes fadeOut {
                0% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }

            // Slide Horizontal
            @keyframes slideLeft {
                0% {
                    transform: translateX(150%);
                }
                100% {
                    transform: translateX(0);
                }
            }

            @keyframes slideRight {
                0% {
                    transform: translateX(-150%);
                }
                100% {
                    transform: translateX(0);
                }
            }

            // Slide Vertical
            @keyframes slideUp {
                0% {
                    transform: translateY(0);
                }
                100% {
                    transform: translateY(-5px);
                }
            }

            @keyframes slideDown {
                0% {
                    transform: translateY(-5px);
                }
                100% {
                    transform: translateY(0);
                }
            }

            // Swing
            @keyframes swingIn {
                0% {
                    transform: rotateX(-100deg);
                    transform-origin: top;
                    opacity: 0;
                }
                100% {
                    transform: rotateX(0deg);
                    transform-origin: top;
                    opacity: 1;
                }
            }

            // Tilt
            @keyframes tiltInLeft {
                0% {
                    transform: 
                        rotateY(-20deg) 
                        rotateX(35deg) 
                        translate(-25px, -25px) 
                        skew(35deg, -10deg);
                    opacity: 0;
                }
                100% {
                    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
                    opacity: 1;
                }
            }

            @keyframes tiltInRight {
                0% {
                    transform: 
                        rotateY(20deg) 
                        rotateX(35deg) 
                        translate(25px, -25px) 
                        skew(-35deg, 10deg);
                    opacity: 0;
                }
                100% {
                    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
                    opacity: 1;
                }
            }
        `}</style>
    )
}

export {KeyFrames}