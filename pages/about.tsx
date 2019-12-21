import { useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { NextPage } from 'next';
import UserContext from '../components/usercontext';
import PageTemplate from '../layouts/page-template';
import BannerImage from '../components/banner-image';
import { ThemeContent } from '../types-dir';

const Index: NextPage = () => {
    const { theme }: { theme: ThemeContent } = useContext(UserContext);
    return (
        <PageTemplate title="About">
            <Head>
                <title>Coles Michaels - About</title>
            </Head>
            <div className="profile-image">
                <a href="https://github.com/cmichaelsd/MySite">
                    <picture>
                        <source srcSet="/static/ColeMichaelsMobile.png" media="(max-width: 375px)" />
                        <img src="/static/ColeMichaels.png" alt="Cole Michaels" />
                    </picture>
                </a>
            </div>
            <div className="margin">
                <p>I'm Cole Michaels.</p>
                <p>
                    I'm a fulltime Fullstack Engineer for V Shred and oncall as a Fullstack Engineer for Jijenge Academy.
                    I was formerly a Software Engineer Tutor with Trilogy Education Services on campus at UCLA and remote supporting a minimum of 10 students a week in specific technologies within Fullstack Web Development.
                </p>
                <p>
                    In March of 2018 I was accepted into Hack Reactor, Los Angeles' 21st cohort. While at Hack Reactor I studied Web Development and gained the skills I use today in my career and met most of my peers within the Los Angeles WebDev community.
                </p>
                <p>
                    Outside of Web Development I have been praticing Jiu-Jitsu since July of 2019, I also enjoy spending my freetime practicing classical guitar and improving my sight reading.
                    I spend a lot of time reading, my most recent reads are:
                </p>
                <ul>
                    <li>
                        Gödel, Escher, Bach: an Eternal Golden Braid
                    </li>
                    <li>
                        Tesla: Inventor of the Electrical Age
                    </li>
                    <li>
                        The Dune Series
                    </li>
                    <li>
                        Psychoanalytic Psychology: The Development of Freud's Thought
                    </li>
                    <li>
                        Man and His Symbols
                    </li>
                    <li>
                        How Music Works
                    </li>
                    <li>
                        The Art of War
                    </li>
                </ul>
                <p>
                    Please <Link href="/contact"><a className="contact-me">contact me</a></Link> if you are interested in my experience, or just want to chat.
                </p>
                <style jsx>{`
                    .margin {
                        margin: 1rem;
                        margin-bottom: 4rem;
                    }
                    .margin ul li {
                        font-size: 14px;
                        list-style: none;
                        text-align: left;
                        margin: 10px;
                    }
                    .contact-me {
                        color: ${theme.highlight};
                        text-decoration-color: ${theme.highlight};
                    }
                `}</style>
            </div>
        </PageTemplate>
    );
};

export default Index;