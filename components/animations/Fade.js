import { useState, useEffect } from 'react'

// TODO: Set for fadeIn and/or fadeOut animation
/**
 * When show is true an animation is triggered for fadeIn.
 * At some point in time if show is changed in the parent the local shouldRender is set to false.
 * Once false a fadeOut animation is triggered.
 * 
 * What I want:
 * Fade In - 
 * When fadeIn is true an animation is triggered for fadeIn.
 * 
 * Fade Out - 
 * When fadeOut is true no animation is set for initial render.
 * At some point in time if fadeOut becomes false in parent.
 * @param {any} param0
 */
function Fade({ show, fadeIn = true, fadeOut = true, time = 2, children }) {
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

/*
function Fade({ show, children }) {
    const [shouldRender, setShouldRender] = useState(show);

    const onAnimationEnd = () => {
        if (!show) setShouldRender(false);
    }

    useEffect(() => {
        if (show) setShouldRender(true);
    }, [show]) // cb runs only if 'show' is updated.

    return shouldRender && (
        <div
            style={{ animation: `${show ? "fadeIn" : "fadeOut"} 2s` }}
            onAnimationEnd={onAnimationEnd}
        >
            {children}
        </div>
    )

}
*/

export default Fade