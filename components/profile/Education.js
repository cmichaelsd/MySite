import BannerImage from '../BannerImage'
import Checkmark from '../svgs/Checkmark'

function Education() {
    return (
        <>
            <div className="education-container">
                <BannerImage src="/static/HackReactor.png" alt="Hack Reactor Logo" />
                <h1>Education</h1>
                <p>Hack Reactor is a Fullstrack Wed Development bootcamp covering topics such as</p>
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