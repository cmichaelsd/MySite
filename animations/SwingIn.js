import { useEffect, useState } from 'react'

export function SwingIn({trigger, time = 0.6, children}) {
    const [animation, setAnimation] = useState("");

    const animationString = `${time}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`;

    useEffect(() => {
        if (trigger) setAnimation(`swingIn ${animationString}`)
    }, [trigger])

    return (
        <>
            <div>
                <div className="swing-in-container"
                    style={{ animation: animation }}
                >
                    {children}
                </div>
            </div>

            <style jsx global>{`
                .swing-in-container {
                    opacity: 0;
                }       
            `}</style>
        </>
    )

}
