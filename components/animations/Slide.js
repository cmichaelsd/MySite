import { useState } from 'react'

function Slide({ time = 0.5, children }) {
    const [animation, setAnimation] = useState("");

    const animationString = `${ time }s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`;

    return (
        <>
            <div className="slide-container"
                style={{ animation: animation }}
                onMouseEnter={() => setAnimation(`slideUp ${animationString}`)}
                onMouseLeave={() => setAnimation(`slideDown ${animationString}`)}
            >
                {children}
            </div>

            <style jsx global>{`
                .slide-container:hover {
                    color: var(--highlight);
                }

                .slide-container:hover svg {
                    fill: var(--highlight);
                }

                .slide-container svg {
                    transition: 0.5s fill;
                }

                .slide-container {
                    transition: ${time}s color;
                }
            `}</style>
        </>
    )

}

export default Slide