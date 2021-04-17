import { SquareImage } from '../../SquareImage'
import { Checkmark } from '../../svgs/Checkmark'
import { TiltIn } from '../../animations/TiltIn'
import { Strings } from '../../../res/strings'

export function VShred({background, animate}) {
    return (
        <div className="project">
            <TiltIn trigger={animate}>
                <SquareImage trigger={animate} parentBackground={background} src="https://d3p2ju5slp2tm7.cloudfront.net/VShred-Web.png" alt="V Shred Logo" height="150" width="150" />
            </TiltIn>
            <div className="project__content">
                <h1 className="headline">{Strings.experience_vshred}</h1>
                <h2>{Strings.experience_android}</h2>
                <p>{Strings.experience_vshred_android}</p>
                <h4>{Strings.role_focus}</h4>
                <p>{Strings.experience_vshred_android_focus}</p>
                <h4>{Strings.key_outcomes}</h4>
                <ul>
                    {Strings.experience_vshred_android_bullets.map(bullet => (
                        <li><Checkmark /><div>{bullet}</div></li>
                    ))}
                </ul>

                <h2>{Strings.experience_fullstack}</h2>
                <p>{Strings.experience_vshred_fullstack}</p>
                <h4>{Strings.role_focus}</h4>
                <p>{Strings.experience_vshred_fullstack_focus}</p>
                <h4>{Strings.key_outcomes}</h4>
                <ul>
                    {Strings.experience_vshred_fullstack_bullets.map(bullet => (
                        <li><Checkmark /><div>{bullet}</div></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}