import { useContext } from 'react';
import UserContext from './usercontext';

export default function PaintRoller() {
    const { theme, starHandler } = useContext(UserContext);
    return (
        <button onClick={starHandler}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                <path fill={theme.textColor} d="M16 6.204l-5.528-0.803-2.472-5.009-2.472 5.009-5.528 0.803 4 3.899-0.944 5.505 4.944-2.599 4.944 2.599-0.944-5.505 4-3.899z"></path>
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