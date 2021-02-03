import { useEffect, useState } from 'react'

// Correct scrolling
function Footer() {
    const [footerPos, setFooterPos] = useState(0);

    const handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setFooterPos(0);
        } else {
            setFooterPos(-50);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <>
            <footer>
                <p>Made in Las Vegas, NV</p>
            </footer>

            <style jsx>{`
                footer {
                    position: fixed;
                    background: var(--toneOne);
                    bottom: ${footerPos}px;
                    width: 100%;
                    color: var(--textColor);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 0.8rem;
                    transition: bottom 0.3s;
                }
            `}</style>
        </>
    )

}

export default Footer