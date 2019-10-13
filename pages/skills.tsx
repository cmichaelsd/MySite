import Head from 'next/head';
import { NextPage } from 'next';
import Skill from '../components/skill';
import PageTemplate from '../layouts/page-template';

const Skills: NextPage = () => {
    const skillsArray: (string | number)[][] = [
        [5, "JavaScript", "/static/fallbacks/tech-icons/JavaScript-Icon.png", "JavaScript Icon"],
        [5, "HTML5", "/static/fallbacks/tech-icons/HTML5-Icon.png", "HTML5 Icon"],
        [5, "CSS3", "/static/fallbacks/tech-icons/CSS3-Icon.png", "CSS3 Icon"],
        [5, "Sass", "/static/fallbacks/tech-icons/Sass-Icon.png", "Sass Icon"],
        [5, "React", "/static/fallbacks/tech-icons/React-Icon.png", "React Icon"],
        [5, "Vue", "/static/fallbacks/tech-icons/Vue-Icon.png", "Vue Icon"],
        [5, "AWS S3", "/static/fallbacks/tech-icons/AWS-S3-Icon.png", "AWS S3 Icon"],
        [5, "ASW EC2", "/static/fallbacks/tech-icons/AWS-EC2-Icon.png", "AWS EC2 Icon"],
        [5, "Node", "/static/fallbacks/tech-icons/Node-Icon.png", "Node Icon"],
        [5, "jQuery", "/static/fallbacks/tech-icons/jQuery-Icon.png", "jQuery Icon"],
        [4, "TypeScript", "/static/fallbacks/tech-icons/TypeScript-Icon.png", "TypeScript Icon"],
        [4, "Next", "/static/fallbacks/tech-icons/Next-Icon.png", "Next Icon"],
        [4, "Docker", "/static/fallbacks/tech-icons/Docker-Icon.png", "Docker Icon"],
        [4, "MongoDB", "/static/fallbacks/tech-icons/MongoDB-Icon.png", "MongoDB Icon"],
        [3, "Webpack", "/static/fallbacks/tech-icons/Webpack-Icon.png", "Webpack Icon"],
        [3, "Canvas", "/static/fallbacks/tech-icons/Canvas-Icon.png", "Canvas Icon"],
        [3, "Angular", "/static/fallbacks/tech-icons/Angular-Icon.png", "Angular Icon"],
        [3, "Postgres", "/static/fallbacks/tech-icons/Postgres-Icon.png", "Postgres Icon"]
    ];
    if (skillsArray.length % 2 !== 0) {
        skillsArray.push(["", "", "", ""]);
    }
    return (
        <PageTemplate title="Skills">
            <Head>
                <title>Coles Michaels - Skills</title>
            </Head>
            <div className="skill-container">
                {skillsArray.map((skill: (string | number)[]) => (
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

export default Skills;