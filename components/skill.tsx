import { Fragment, useContext } from 'react';
import { NextPage } from 'next';
import UserContext from './usercontext';
import { SkillProps, ThemeContent } from '../types-dir';

const Skills: NextPage<SkillProps> = (props) => {
    const { theme }: { theme: ThemeContent } = useContext(UserContext);
    function getStars(stars: string | number): string {
        const emptyStar: string = '☆';
        const filledStar: string = '★';
        let build: string = '';

        while (stars > build.length) build += filledStar;
        while (build.length < 5) build += emptyStar;

        return build;
    }
    return (
        <li className="skill">
            {props.stars && (
                <Fragment>
                    <img className="skill-image" src={props.src} alt={props.alt} />
                    <span className="skill-title">{props.children}</span>
                    <span className="skill-rating">
                        {getStars(props.stars)}
                    </span>
                </Fragment>
            )}
            <style jsx>{`
                .skill {
                    list-style: none;
                    max-width: 320px;
                    width: 284px;
                    padding: 0 5px 0 10px;
                    margin-bottom: 10px;
                }
                .skill-image {
                    width: 16px;
                    padding-right: 5px;
                }
                .skill-title {
                    display: inline-block;
                }
                .skill-rating {
                    color: ${theme.highlight};
                    float: right;
                }
            `}</style>
        </li>
    );
}

export default Skills;