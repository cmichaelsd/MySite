import { useState, useEffect } from 'react'
import { Strings } from '../res/strings'
import { Dimens } from '../res/dimens'

export function Footer() {
    const [footerPos, setFooterPos] = useState(0);

    const handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setFooterPos(0);
        } else {
            setFooterPos(-Dimens.size_of_footer);
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
            <footer id="footer">
                <p>{Strings.location}</p>
            </footer>

            <style jsx>{`
                #footer {
                    position: fixed;
                    background: var(--toneOne);
                    bottom: ${footerPos}px;
                    width: 100%;
                    height: ${Dimens.size_of_footer}px;
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
