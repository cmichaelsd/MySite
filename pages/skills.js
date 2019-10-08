import { useContext } from 'react';
import Head from 'next/head';
import UserContext from '../components/usercontext';
import Skill from '../components/skill';
import PageTemplate from '../layouts/page-template';

export default function Skills() {
    const { theme } = useContext(UserContext);
    const skillsArray = [
        [5, "JavaScript", "/static/tech-icons/JavaScript-Icon.webp", "JavaScript Icon"],
        [5, "HTML5", "/static/tech-icons/HTML5-Icon.webp", "HTML5 Icon"],
        [5, "CSS3", "/static/tech-icons/CSS3-Icon.webp", "CSS3 Icon"],
        [5, "Sass", "/static/tech-icons/Sass-Icon.webp", "Sass Icon"],
        [5, "React", "/static/tech-icons/React-Icon.webp", "React Icon"],
        [5, "Vue", "/static/tech-icons/Vue-Icon.webp", "Vue Icon"],
        [5, "AWS S3", "/static/tech-icons/AWS-S3-Icon.webp", "AWS S3 Icon"],
        [5, "ASW EC2", "/static/tech-icons/AWS-EC2-Icon.webp", "AWS EC2 Icon"],
        [5, "Node", "/static/tech-icons/Node-Icon.webp", "Node Icon"],
        [5, "jQuery", "/static/tech-icons/jQuery-Icon.webp", "jQuery Icon"],
        [4, "Next", "/static/tech-icons/Next-Icon.webp", "Next Icon"],
        [4, "Docker", "/static/tech-icons/Docker-Icon.webp", "Docker Icon"],
        [4, "MongoDB", "/static/tech-icons/MongoDB-Icon.webp", "MongoDB Icon"],
        [3, "Webpack", "/static/tech-icons/Webpack-Icon.webp", "Webpack Icon"],
        [3, "Canvas", "/static/tech-icons/Canvas-Icon.webp", "Canvas Icon"],
        [3, "Angular", "/static/tech-icons/Angular-Icon.webp", "Angular Icon"],
        [3, "Postgres", "/static/tech-icons/Postgres-Icon.webp", "Postgres Icon"]
    ];
    if (skillsArray.length % 2 !== 0) {
        skillsArray.push([null, ""]);
    }
    return (
        <PageTemplate title="Skills">
            <Head>
                <title>Coles Michaels - Skills</title>
            </Head>
            <div className="skill-container">
                {skillsArray.map((skill) => (
                    <Skill key={skill[1]} src={skill[2]} alt={skill[3]} stars={skill[0]}>{skill[1]}</Skill>
                ))}
            </div>
            <style jsx>{`
                .skill-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    margin-top: 3rem;
                }
            `}</style>
        </PageTemplate >
    );
};