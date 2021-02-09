import BannerImage from '../BannerImage'

function Education() {
    return (
        <>
            <div className="education-container">
                <BannerImage src="/static/HackReactor.png" alt="Hack Reactor Logo" />
                <h1>Education</h1>
                <p>Hack Reactor is a Fullstrack Wed Development bootcamp covering topics such as</p>
                <ul>
                    <li>Data Structures</li>
                    <li>Databases</li> 
                    <li>Microservice Architecture</li>
                    <li>Frontend Design</li>
                    <li>Program Efficiency</li>
                </ul>
            </div>

            <style jsx>{`
                .education-container {
                    margin-bottom: 5rem;
                }
            `}</style>
        </>
    )
}

export default Education