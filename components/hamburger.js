
import { useContext } from 'react';
import UserContext from './usercontext';

export default function Hamburger() {
    const { theme, sideDrawerToggle } = useContext(UserContext);
    return (
        <button onClick={sideDrawerToggle}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 16 16">
                <path fill={theme.textColor} d="M1 3h14v3h-14zM1 7h14v3h-14zM1 11h14v3h-14z"></path>
            </svg>
            <style jsx>{`
                button {
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                button:focus {
                    outline: none;
                }
            `}</style>
        </button>
    );
}