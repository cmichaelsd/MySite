import { useEffect, useState } from 'react'

function TiltIn({trigger, invert = false, time = 0.5, children}) {
    const [animation, setAnimation] = useState("");

    const animationString = `${time}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`;

    useEffect(() => {
        if (trigger && invert) setAnimation(`tiltInRight ${animationString}`)
        if (trigger && !invert) setAnimation(`tiltInLeft ${animationString}`)
    }, [trigger])

    return (
        <>
            <div>
                <div className="tilt-in-container"
                    style={{ animation: animation }}
                >
                    {children}
                </div>
            </div>

            <style jsx global>{`
                .tilt-in-container {
                    opacity: 0;
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
        </>
    )

}

export {TiltIn}