import SVGButton from './SVGButton'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

function Floppydisk() {
    const { theme } = useContext(ThemeContext);

    return (
        <SVGButton svgButtonAction={() => { } }>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 16 16">
                <path fill={theme.textColor} d="M14 0h-14v16h16v-14l-2-2zM8 2h2v4h-2v-4zM14 14h-12v-12h1v5h9v-5h1.172l0.828 0.828v11.172z"></path>
            </svg>
        </SVGButton>
    )
}

export default Floppydisk