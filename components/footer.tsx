import { useContext } from 'react';
import { NextPage } from 'next';
import UserContext from './usercontext';
import { ThemeContent } from '../types-dir';

const Footer: NextPage = () => {
    const { theme }: { theme: ThemeContent } = useContext(UserContext);
    return (
        <footer>
            <p>
                Made in Los Angeles, CA
            </p>
            <style jsx>{`
                footer {
                    position: fixed;
                    background: ${theme.toneOne};
                    bottom: 0;
                    width: 100%;
                    color: ${theme.textColor};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 0.8rem;
                }
            `}</style>
        </footer>
    );
}

export default Footer;