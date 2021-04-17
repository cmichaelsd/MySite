import { useState, useEffect } from 'react'

export function Fade({ show, fadeIn = true, fadeOut = true, time = 2, children }) {
    const [shouldRender, setShouldRender] = useState(show);

    const onAnimationEnd = () => {
        if (!show) setShouldRender(false);
    }

    const fadeInClass = () => {
        return fadeIn ? "fadeIn" : "";
    }

    const fadeOutClass = () => {
        return fadeOut ? "fadeOut" : "";
    }

    useEffect(() => {
        if (show) setShouldRender(true);
    }, [show]) // cb runs only if 'show' is updated.

    return shouldRender && (
        <div
            style={{ animation: `${show ? fadeInClass() : fadeOutClass()} ${time}s` }}
            onAnimationEnd={onAnimationEnd}
        >
            {children}
        </div>
    )

}
