import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export function Checkmark() {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16">
                <path fill={theme.highlight} d="M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z"></path>
            </svg>
        </div>
    )
}
