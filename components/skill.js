import { Fragment, useContext } from 'react';
import UserContext from '../components/usercontext';

export default function Skill(props) {
    const { theme } = useContext(UserContext);
    function getStars(stars) {
        const emptyStar = '☆';
        const filledStar = '★';
        let build = '';

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