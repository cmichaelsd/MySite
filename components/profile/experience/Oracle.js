import { SquareImage } from '@/components/SquareImage'
import { Checkmark }   from '@/svgs/Checkmark'
import { TiltIn }      from '@/animations/TiltIn'
import { Strings }     from '@/res/strings'
import { Dimens }      from '@/res/dimens'

export function Oracle({background, animate}) {
    return (
        <div className="project">
            <TiltIn trigger={animate} invert={true}>
                <SquareImage
                    parentBackground={background} 
                    src={Strings.square_image_oracle_src}
                    alt={Dimens.square_image_oracle_alt_tag} 
                    height={Dimens.square_image_length} 
                    width={Dimens.square_image_length} 
                />
            </TiltIn>
            <div className="project__content">
                <h1 className="headline">{Strings.experience_oracle}</h1>
                <h2>{Strings.summary}</h2>
                <p>{Strings.experience_oracle_summary}</p>
                <h2>{Strings.experience_senior_software_engineer}</h2>
                <h4>{Strings.role_focus}</h4>
                <ul>
                    {Strings.experience_oracle_senior_engineer_bullets.map((bullet, index) => (
                        <li key={index}><Checkmark /><div>{bullet}</div></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
