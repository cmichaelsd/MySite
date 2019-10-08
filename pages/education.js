import { useContext } from 'react';
import Head from 'next/head';
import UserContext from '../components/usercontext';
import PageTemplate from '../layouts/page-template';
import BannerImage from '../components/banner-image';

export default function Education() {
    const { theme } = useContext(UserContext);
    return (
        <PageTemplate title="Education">
            <Head>
                <title>Coles Michaels - Education</title>
            </Head>
            <div className="education-container">
                <BannerImage href="https://www.hackreactor.com/" src="/static/HackReactor.png" alt="Hack Reactor Logo" />
                <p className="margin">Hack Reactor is a Fullstrack Wed Development bootcamp covering topics such as Data Structures and Memory, Databases, Microservice Architecture, Frontend Design and CSS, and Program Efficiency.</p>
                <p className="margin">I was accepted into Hack Reactor's 21st cohort March of 2018, each cohort lasts three months and each student is required to be on campus 12 hours a day 6 days a week. This is a full immersion bootcamp where students have their eduaction equated to drinking from a firehose.</p>
            </div>
            <div className="education-container">
                <BannerImage href="https://www.trilogyed.com/" src="/static/TrilogyEducationServices.png" alt="Hack Reactor Logo" />
                <p className="margin">Trilogy Education Services is a national program which plugs into state universities, they offer education in Fullstack Web Devlopment and offer in-person and remote tutoring outside of class.</p>
                <p className="margin">After graduating Hack Reactor I moved on to become a tutor at Trilogy Education Services, where I worked one-on-one with a minimum of 10 students a week offering support in a wide range of topics like CSS fundamentals, jQuery, React, MongoDB, SQL, JavaScript, Python, and Deployment.</p>
            </div>
            <style jsx>{`
                .margin {
                    margin: 1rem;
                }
                
                @media (max-width: 768px) {
                    .education-container:last-of-type {
                        padding-bottom: 2em;
                    }
                }
            `}</style>
        </PageTemplate>
    );
};