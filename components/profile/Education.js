import BannerImage from '../BannerImage'
import Checkmark from '../svgs/Checkmark'

function Education() {
    return (
        <>
            <div className="education-container">
                <BannerImage src="https://d3p2ju5slp2tm7.cloudfront.net/HackReactor.png" alt="Hack Reactor Logo" height="125" width="400" />
                <h1>Education</h1>
                <p>Hack Reactor is a Full Stack Wed Development bootcamp covering topics such as</p>
                <ul>
                    <li><Checkmark /> <div>Data Structures</div></li>
                    <li><Checkmark /> <div>Databases</div></li> 
                    <li><Checkmark /> <div>Microservice Architecture</div></li>
                    <li><Checkmark /> <div>Frontend Design</div></li>
                    <li><Checkmark /> <div>Program Efficiency</div></li>
                </ul>
            </div>

            <style jsx>{`
                .education-container {
                    margin-bottom: 5rem;
                }

                ul {
                    list-style: none;
                }

                li {
                    display: flex;
                    gap: 5px;
                }
            `}</style>
        </>
    )
}

export default Education