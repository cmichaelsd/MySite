import {BannerImage} from '../BannerImage'
import {Checkmark} from '../svgs/Checkmark'
import {SwingIn} from '../animations/SwingIn'

function Education({background, animate}) {
    return (
        <>
            <div className="education-container">
                <SwingIn trigger={animate}>
                    <BannerImage src="https://d3p2ju5slp2tm7.cloudfront.net/HackReactor.png" alt="Hack Reactor Logo" height="125" />
                </SwingIn>
                <h1 className="headline">Education</h1>
                <p>Hack Reactor is a Full Stack Wed Development bootcamp covering topics such as</p>
                <ul>
                    <li><Checkmark /><div>Data Structures</div></li>
                    <li><Checkmark /><div>Databases</div></li> 
                    <li><Checkmark /><div>Microservice Architecture</div></li>
                    <li><Checkmark /><div>Frontend Design</div></li>
                    <li><Checkmark /><div>Program Efficiency</div></li>
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

export {Education}