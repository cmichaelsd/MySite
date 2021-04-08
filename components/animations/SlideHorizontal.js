import { useState, useEffect, useRef } from 'react'

function SlideHorizontal({ setAnimateEnd, toStart = true, time = 1, children }) {
    const [animation, setAnimation] = useState("");

    const slideHorizontalRef = useRef(null);

    const animationString = `${time}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`;

    const direction = toStart ? 'slideLeft' : 'slideRight';

    const handleScroll = () => {
        const topPosition = slideHorizontalRef.current.getBoundingClientRect().top;

        if (topPosition < window.innerHeight / 2) {
            setAnimation(`${direction} ${animationString}`);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
            <div className="slide-horizontal-container"
                style={{ animation: animation }}
                ref={slideHorizontalRef}
                onAnimationEnd={() => setAnimateEnd(true)}
            >
                {children}
            </div>

            <style jsx>{`
                .slide-horizontal-container {
                    transform: translateX(${toStart ? 150 : -150}%);
                }
            `}</style>
        </>
    )

}

export {SlideHorizontal}