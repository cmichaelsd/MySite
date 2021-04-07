import { useContext } from 'react'
import { statuses, ApplicationStatusContext } from '../../context/ApplicationStatusContext'
import { Events } from '../../events';
import PaintRoller from '../svgs/PaintRoller'

function SideDrawer() {
    const { status, changeStatus } = useContext(ApplicationStatusContext);

    const drawerClasses = () => {
        if (status === statuses.INITIAL_LOADING || status === statuses.READY) {
            return "";
        }

        if (status === statuses.NAVIGATION_DRAWER_OPEN) {
            return `open`;
        }
    }

    const toggleSideDrawer = () => {
        changeStatus(Events.NAVIGATION_DRAWER_CLOSED);
    }

    return (
		<>
			<nav id="side-drawer" className={drawerClasses()}>
				<ul>
                    <li onClick={toggleSideDrawer}>
						<a href="#about">
							<span>About</span>
						</a>
					</li>
                    <li onClick={toggleSideDrawer}>
						<a href="#experience">
							<span>Experience</span>
						</a>
                    </li>
                    <li onClick={toggleSideDrawer}>
						<a href="#education">
							<span>Education</span>
						</a>
					</li>
                    <li onClick={toggleSideDrawer}>
						<a href="#contact">
							<span>Contact</span>
						</a>
					</li>
                    <li onClick={toggleSideDrawer}>
						<PaintRoller />
					</li>
				</ul>
			</nav>

            <style jsx>{`
                #side-drawer {
                    height: 100%;
                    background: var(--toneTwo);
                    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5px);
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 60%;
                    max-width: 400px;
                    z-index: 2;
                    transform: translateX(-100%);
                    transition: transform 0.3s ease-out;
                }

                #side-drawer.open {
                    transform: translateX(0);
                }

                #side-drawer ul {
                    height: 100%;
                    list-style: none;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                #side-drawer li {
                    margin: 0.5rem 0;
                }

                #side-drawer a {
                    color: var(--textColor);
                    text-decoration: none;
                    font-size: 1.2rem;
                }

                @media (min-width: 769px) {
                    #side-drawer {
                        display: none;
                    }
                }
            `}</style>
		</>
	)
}

export default SideDrawer;