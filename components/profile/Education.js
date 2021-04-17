import { BannerImage } from '../BannerImage'
import { Checkmark } from '../svgs/Checkmark'
import { SwingIn } from '../animations/SwingIn'
import { Strings } from '../../res/strings'

export function Education({background, animate}) {
    return (
        <>
            <div className="education-container">
                <SwingIn trigger={animate}>
                    <BannerImage 
                        src="https://d3p2ju5slp2tm7.cloudfront.net/HackReactor.png"
                        alt="Hack Reactor Logo" 
                        height="125"
                        altHeight="93"
                    />
                </SwingIn>
                <h1 className="headline">{Strings.education_headline}</h1>
                <p>{Strings.education_info}</p>
                <ul>
                    {Strings.education_bullets.map(bullet => (
                        <li><Checkmark /><div>{bullet}</div></li>
                    ))}
                </ul>
            </div>

            <style jsx>{`
                ul {
                    list-style: none;
                }

                li {
                    margin-bottom: 10px;
                    display: flex;
                    gap: 10px;
                }
            `}</style>
        </>
    )
}
