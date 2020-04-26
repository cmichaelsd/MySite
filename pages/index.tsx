import { Component } from 'react';
import Head from 'next/head';
import UserContext from '../components/usercontext';
import PageTemplate from '../layouts/page-template';
import BannerImage from '../components/banner-image';
import SquareImage from '../components/square-image';
import { ThemeContent } from '../types-dir';

export default class Index extends Component {
    static contextType = UserContext;
    render() {
        const { theme }: { theme: ThemeContent } = this.context
        return (
            <PageTemplate title="Home">
                <Head>
                    <title>Coles Michaels</title>
                </Head>
                <div className="segment" id="about">
                    <div className="set-width">
                        <div className="profile-image">
                            <a href="https://github.com/cmichaelsd/MySite">
                                <picture>
                                    <source srcSet="/static/ColeMichaelsMobile.png" media="(max-width: 660px)" />
                                    <img src="/static/ColeMichaels.png" alt="Cole Michaels" />
                                </picture>
                            </a>
                        </div>
                        <p>I'm Cole Michaels.</p>
                        <p>
                            I'm a fulltime Fullstack Engineer for V Shred.
                            I was formerly a oncall as a Fullstack Engineer for Jijenge Academy and a Software Engineer Tutor with Trilogy Education Services at UCLA supporting a minimum of 10 students a week in specific technologies within Fullstack Web Development.
                        </p>
                        <p>
                            In March of 2018 I was accepted into Hack Reactor, Los Angeles' 21st cohort. While at Hack Reactor I studied Web Development and gained the skills I use today in my career and met most of my peers within the Los Angeles WebDev community.
                        </p>
                        <p>
                            Outside of Web Development I have been praticing Jiu-Jitsu since July of 2019, I also enjoy spending my freetime practicing classical guitar and improving my sight reading.
                        </p>
                    </div>
                </div>
                <div className="segment" id="experience">
                    <div className="set-width">
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
                    </div>
                </div>
                <div className="segment" id="education">
                    <div className="set-width">
                        <div className="education-container">
                            <BannerImage href="https://www.hackreactor.com/" src="/static/HackReactor.png" alt="Hack Reactor Logo" />
                            <div className="education-container__text">
                                <p>Hack Reactor is a Fullstrack Wed Development bootcamp covering topics such as Data Structures and Memory, Databases, Microservice Architecture, Frontend Design and CSS, and Program Efficiency.</p>
                                <p>I was accepted into Hack Reactor's 21st cohort March of 2018, each cohort lasts three months and each student is required to be on campus 12 hours a day 6 days a week. This is a full immersion bootcamp where students have their eduaction equated to drinking from a firehose.</p>
                            </div>
                        </div>
                        <div className="education-container">
                            <BannerImage href="https://www.trilogyed.com/" src="/static/TrilogyEducationServices.png" alt="Trilogy Education Logo" />
                            <div className="education-container__text">
                                <p>Trilogy Education Services is a national program which plugs into state universities, they offer education in Fullstack Web Devlopment and offer in-person and remote tutoring outside of class.</p>
                                <p>After graduating Hack Reactor I moved on to become a tutor at Trilogy Education Services, where I worked one-on-one with a minimum of 10 students a week offering support in a wide range of topics like CSS fundamentals, jQuery, React, MongoDB, SQL, JavaScript, Python, and Deployment.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="segment" id="contact">
                    <div className="set-width">
                        <div className="contact-container">
                            <p>
                                Feel free to send me an email at <a className="contact-container__email-me" href="mailto:cmichaelsd@gmail.com">cmichaelsd@gmail.com</a>
                            </p>
                        </div>
                        <div className="links-container">
                            <SquareImage href="https://github.com/cmichaelsd" src="/static/Github-Web.png" alt="Github Logo" />
                            <SquareImage href="https://linkedin.com/in/cole-daniel-michaels/" src="/static/LinkedIn-Web.png" alt="LinkedIn Logo" />
                            <SquareImage href="https://glitch.com/@cmichaelsd" src="/static/Glitch-Web.png" alt="Glitch Logo" />
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .segment {
                        padding: 0.5rem 1rem;
                    }
                    .set-width {
                        margin: auto;
                        max-width: 660px;
                    }
                    .segment:nth-child(odd) {
                        background-color: ${theme.toneOne};
                    }
                    .profile-image {
                        display: flex;
                        justify-content: center;
                        align-content: center;
                        margin-top: 1rem;
                    }
                    // #experience {
                    //     height: 850.34px;
                    // }
                    .project {
                        display: flex;
                        align-content: center;
                    }
                    .projects {
                        padding: 20px;
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
                    .education-container {
                        margin-bottom: 5rem;
                    }
                    .education-container__text {
                        padding-top: 1rem;
                    }
                    .contact-container {
                        margin-top: 3rem;
                        text-align: center;
                    }
                    .contact-container__email-me {
                        color: ${theme.highlight};
                        text-decoration-color: ${theme.highlight};
                    }
                    .links-container {
                        display: flex;
                        justify-content: center;
                        padding-top: 1em;
                    }
                    @media (max-width: 768px) {
                        .contact-container {
                            margin-top: 1rem;
                            text-align: center;
                        }
                        .links-container {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            padding-top: 0;
                        }
                    } 
                `}</style>
            </PageTemplate>
        );
    }
};
