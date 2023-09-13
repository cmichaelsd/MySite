import { Plus }    from '@/svgs/Plus'
import { Strings } from '@/res/strings'
import { Dimens }  from '@/res/dimens'

export function About({background}) {
    return (
        <>
            <div className="profile-image">
                <picture>
                    <source srcSet={Strings.profile_image_mobile_src} media={`(max-width: ${Dimens.mobile_image_width}px)`} />
                    <img src={Strings.profile_image_src} alt={Strings.name} />
                </picture>
            </div>
            <h1 className="headline">{Strings.about_headline}</h1>
            <p>{Strings.about_paragraph_one}</p>
            <ul>
                {Strings.about_bullets.map((bullet, index) => (
                    <li key={index}><Plus /><div>{bullet}</div></li>
                ))}
            </ul>

            <style jsx>{`
                .profile-image {
                    display:         flex;
                    justify-content: center;
                    align-content:   center;
                    margin-top:      1rem;
                    height:          ${Dimens.profile_image_height}px;
                }

                ul {
                    list-style:      none;
                }

                li {
                    margin-bottom:   10px;
                    display:         flex;
                    gap:             10px;
                }

                @media (max-width: ${Dimens.mobile_image_width}px) {
                    .profile-image {
                        height:      ${Dimens.profile_mobile_image_height}px;
                    }
                }
            `}</style>
        </>
    )
}
