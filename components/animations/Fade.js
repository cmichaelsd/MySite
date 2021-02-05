import { useState, useEffect } from 'react'

// TODO: Set for fadeIn and/or fadeOut animation
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

export default Fade