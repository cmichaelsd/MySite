import { SquareImage } from '../../SquareImage'
import { Checkmark } from '../../svgs/Checkmark'
import { TiltIn } from '../../animations/TiltIn'
import { Strings } from '../../../res/strings'
import { Dimens } from '../../../res/dimens'

export function TrilogyEducation({background, animate}) {
    return (
        <div className="project">
            <TiltIn trigger={animate} invert={true}>
                <SquareImage 
                    parentBackground={background} 
                    src="https://d3p2ju5slp2tm7.cloudfront.net/Trilogy-Web.png" 
                    alt={Strings.square_image_trilogy_alt_tag} 
                    height={Dimens.square_image_length} 
                    width={Dimens.square_image_length} 
                />
            </TiltIn>
            <div className="project__content">
                <h1 className="headline">{Strings.experience_trilogy}</h1>
                <h2>{Strings.experience_software_tutor}</h2>
                <p>{Strings.experience_trilogy_software_tutor}</p>
                <h4>{Strings.role_focus}</h4>
                <p>{Strings.experience_trilogy_software_tutor_focus}</p>
                <h4>{Strings.key_outcomes}</h4>
                <ul>
                    {Strings.experience_trilogy_software_tutor_bullets.map((bullet, index) => (
                        <li key={index}><Checkmark /><div>{bullet}</div></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
