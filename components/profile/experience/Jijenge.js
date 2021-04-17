import { SquareImage } from '../../SquareImage'
import { Checkmark } from '../../svgs/Checkmark'
import { TiltIn } from '../../animations/TiltIn'
import { Strings } from '../../../res/strings'

export function Jijenge({background, animate}) {
    return (
        <div className="project">
            <TiltIn trigger={animate}>
                <SquareImage parentBackground={background} background="#f16870" src="https://d3p2ju5slp2tm7.cloudfront.net/Jijenge-Web.png" alt="Jijenge Logo" height="150" width="150" />
            </TiltIn>
            <div className="project__content">
                <h1 className="headline">{Strings.experience_jijenge}</h1>
                <h2>{Strings.experience_fullstack}</h2>
                <p>{Strings.experience_jijenge_fullstack}</p>
                <h4>{Strings.role_focus}</h4>
                <p>{Strings.experience_jijenge_fullstack_focus}</p>
                <h4>{Strings.key_outcomes}</h4>
                <ul>
                    <li><Checkmark /><div>{Strings.experience_jijenge_fullstack_bullets}</div></li>
                </ul>
            </div>
        </div>
    )
}
