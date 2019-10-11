import { useContext } from 'react';
import { NextPage } from 'next';
import UserContext from './usercontext';
import { ThemeContent } from '../types-dir';

const Hamburger: NextPage = () => {
    const { theme, sideDrawerToggle }: { theme: ThemeContent, sideDrawerToggle: any } = useContext(UserContext);
    return (
        <button onClick={sideDrawerToggle}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
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

export default Hamburger;