import { BannerImage } from '@/components/BannerImage'
import { Checkmark }   from '@/svgs/Checkmark'
import { SwingIn }     from '@/animations/SwingIn'
import { Strings }     from '@/res/strings'
import { Dimens }      from '@/res/dimens'

export function Education({background, animate}) {
    return (
        <>
            <div className="education-container">
                <SwingIn trigger={animate}>
                    <BannerImage 
                        src={Strings.banner_image_hackreactor_src}
                        alt={Strings.banner_image_hackreactor_alt_tag} 
                        height={Dimens.banner_image_hackreactor_height}
                    />
                </SwingIn>
                <h1 className="headline">{Strings.education_headline}</h1>
                <p>{Strings.education_info}</p>
                <ul>
                    {Strings.education_bullets.map((bullet, index) => (
                        <li key={index}><Checkmark /><div>{bullet}</div></li>
                    ))}
                </ul>
            </div>

            <style jsx>{`
                ul {
                    list-style:    none;
                }

                li {
                    margin-bottom: 10px;
                    display:       flex;
                    gap:           10px;
                }
            `}</style>
        </>
    )
}
