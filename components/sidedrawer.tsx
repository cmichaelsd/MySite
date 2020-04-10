import { useContext } from 'react';
import Link from './link';
import { NextPage } from 'next';
import UserContext from './usercontext';
import PaintRoller from './paint-roller';
import { ThemeContent } from '../types-dir';

const SideDrawer: NextPage = () => {
    const { theme, show, sideDrawerToggle }: { theme: ThemeContent, show: boolean, sideDrawerToggle: any } = useContext(UserContext);
    let drawerClasses: string = 'side-drawer';
    if (show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li onClick={sideDrawerToggle}>
                    <a href="#about">
                        <span>About</span>
                    </a>
                </li>
                <li onClick={sideDrawerToggle}>
                    <a href="#experience">
                        <span>Experience</span>
                    </a>
                </li>
                <li onClick={sideDrawerToggle}>
                    <a href="#education">
                        <span>Education</span>
                    </a>
                </li>
                <li onClick={sideDrawerToggle}>
                    <a href="#contact">
                        <span>Contact</span>
                    </a>
                </li>
                <li onClick={sideDrawerToggle}>
                    <PaintRoller />
                </li>
            </ul>
            <style jsx>{`
                .side-drawer {
                    height: 100%;
                    background: ${theme.toneTwo};
                    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5px);
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 70%;
                    max-width: 400px;
                    z-index: 200;
                    transform: translateX(-100%);
                    transition: transform 0.3s ease-out;
                }
                .side-drawer.open {
                    transform: translateX(0);
                }
                .side-drawer ul {
                    height: 100%;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .side-drawer li {
                    margin: 0.5rem 0;
                }
                .side-drawer a {
                    color: ${theme.textColor};
                    text-decoration: none;
                    font-size: 1.2rem;
                }
                .side-drawer a:hover,
                .side-drawer a.active {
                    color: ${theme.highlight};
                }
                @media (min-width: 769px) {
                    .side-drawer {
                        display: none;
                    }
                }
            `}</style>
        </nav>
    );
}

export default SideDrawer;