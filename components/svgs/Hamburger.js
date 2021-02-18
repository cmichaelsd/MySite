import SVGButton from './SVGButton'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { ApplicationStatusContext } from '../../context/ApplicationStatusContext'
import { Events } from '../../events'

function Hamburger() {
    const { theme } =  useContext(ThemeContext);
    const { changeStatus } = useContext(ApplicationStatusContext);

    return (
        <SVGButton svgButtonAction={() => changeStatus(Events.NAVIGATION_DRAWER_OPENED) } label="Open Side Navigation">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <path fill={theme.textColor} d="M1 3h14v3h-14zM1 7h14v3h-14zM1 11h14v3h-14z"></path>
            </svg>
        </SVGButton>
    );
}

export default Hamburger;