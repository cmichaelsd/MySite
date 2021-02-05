import BannerImage from './BannerImage'

function Education() {
    return (
        <>
            <div className="education-container">
                <BannerImage src="/static/HackReactor.png" alt="Hack Reactor Logo" />
                <div className="education-container__text">
                    <p>Hack Reactor is a Fullstrack Wed Development bootcamp covering topics such as Data Structures and Memory, Databases, Microservice Architecture, Frontend Design and CSS, and Program Efficiency.</p>
                    <p>I was accepted into Hack Reactor's 21st cohort March of 2018, each cohort lasts three months and each student is required to be on campus 12 hours a day 6 days a week. This is a full immersion bootcamp where students have their eduaction equated to drinking from a firehose.</p>
                </div>
            </div>

            <style jsx>{`
                .education-container {
                    margin-bottom: 5rem;
                }
                .education-container__text {
                    padding-top: 1rem;
                }
            `}</style>
        </>
    )
}

export default Education