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
            `}</style>
        </>
    )

}

export {TiltIn}