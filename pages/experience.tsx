import { useContext } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import UserContext from '../components/usercontext';
import PageTemplate from '../layouts/page-template';
import SquareImage from '../components/square-image';
import { ThemeContent } from '../types-dir';

const Experience: NextPage = () => {
    const { theme }: { theme: ThemeContent } = useContext(UserContext);
    return (
        <PageTemplate title="Experience">
            <Head>
                <title>Coles Michaels - Experience</title>
            </Head>
            <div id="experience">
                <ul className="projects">
                    <li className="project">
                        <SquareImage href="https://vshred.com/" src="/static/VShred-Web.png" alt="V Shred Logo" />
                        <div className="project__content">
                            <h2>
                                <a href="https://vshred.com/" target="_blank" rel="noopener noreferrer">V Shred</a>
                            </h2>
                            <p>The V Shred website is the main site for the company V Shred and deals in promotions, user interactive methods for finding fitness plans, and downloadable content.</p>
                        </div>
                    </li>
                    <li className="project">
                        <SquareImage href="https://sculptnation.com/" src="/static/SculptNation-Web.png" alt="Sculpt Nation Logo" />
                        <div className="project__content">
                            <h2>
                                <a href="https://sculptnation.com/" target="_blank" rel="noopener noreferrer">SculptNation</a>
                            </h2>
                            <p>SculptNation is the companion site to V Shred, it is the main focus of their e-commerce platform and the portal for users to purchase health and fitness supplements. This system is considered the financial heart of the company.</p>
                        </div>
                    </li>
                    <li className="project">
                        <SquareImage background="#f16870" href="https://www.jijengeacademy.com/" src="/static/Jijenge-Web.png" alt="Jijenge Logo" />
                        <div className="project__content">
                            <h2>
                                <a href="https://www.jijengeacademy.com/" target="_blank" rel="noopener noreferrer">Jijenge Academy</a>
                            </h2>
                            <p>Based in East Africa, Jijenge is a non-profit organization dedicated to educating Nairobian orphans in Software Engineering and Web Development. The Jijenge site is dedicated to securely collecting donations for this cause.</p>
                        </div>
                    </li>
                </ul>
                <style jsx>{`
                    .projects {
                        padding: 20px;
                    }
                    .project {
                        display: flex;
                        align-content: center;
                    }
                    .project__content {
                        margin-left: 4em;
                    }
                    .project__content h2 a,
                    .project__content h2 a:active,
                    .project__content h2 a:hover {
                        text-decoration: none;
                        color: ${theme.highlight};
                    }
                    @media (max-width: 768px) {
                        .project {
                            flex-direction: column;
                            align-items: center;
                        }
                        .project__content {
                            margin-left: auto;
                        }
                    } 
                `}</style>
            </div>
        </PageTemplate>
    );
};

export default Experience;