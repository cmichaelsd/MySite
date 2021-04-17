import { Plus }    from '../svgs/Plus'
import { Strings } from '../../res/strings'
import { Dimens }  from '../../res/dimens'

export function About({background}) {
    return (
        <>
            <div className="profile-image">
                <picture>
                    <source srcSet="https://d3p2ju5slp2tm7.cloudfront.net/ColeMichaelsMobile3.png" media={`(max-width: ${Dimens.mobile_image_width}px)`} />
                    <img src="https://d3p2ju5slp2tm7.cloudfront.net/ColeMichaels3.png" alt={Strings.name} />
                </picture>
            </div>
            <h1 className="headline">{Strings.about_headline}</h1>
            <p>{Strings.about_paragraph_one}</p>
            <ul>
                {Strings.about_bullets.map((bullet, index) => (
                    <li key={index}><Plus /><div>{bullet}</div></li>
                ))}
            </ul>
            <p>{Strings.about_paragraph_two}</p>
            <p>{Strings.about_paragraph_three}</p>

            <style jsx>{`
                .profile-image {
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    margin-top: 1rem;
                    height: ${Dimens.profile_image_height}px;
                }

                ul {
                    list-style: none;
                }

                li {
                    margin-bottom: 10px;
                    display: flex;
                    gap: 10px;
                }

                @media (max-width: ${Dimens.mobile_image_width}px) {
                    .profile-image {
                        height: ${Dimens.profile_mobile_image_height}px;
                    }
                }
            `}</style>
        </>
    )
}
