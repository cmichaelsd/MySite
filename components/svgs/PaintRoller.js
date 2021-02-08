import SVGButton from './SVGButton'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

function PaintRoller() {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        <SVGButton svgButtonAction={changeTheme}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill={theme.textColor} d="M16 9v-6h-3v-1c0-0.55-0.45-1-1-1h-11c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h11c0.55 0 1-0.45 1-1v-1h2v4h-9v2h-0.5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-1h9zM12 3h-11v-1h11v1z"></path>
            </svg>
        </SVGButton>
    );
}

export default PaintRoller;