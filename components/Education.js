import BannerImage from './BannerImage'

function Education() {
    return (
        <>
            <div className="education-container">
                <BannerImage href="https://www.hackreactor.com/" src="/static/HackReactor.png" alt="Hack Reactor Logo" />
                <div className="education-container__text">
                    <p>Hack Reactor is a Fullstrack Wed Development bootcamp covering topics such as Data Structures and Memory, Databases, Microservice Architecture, Frontend Design and CSS, and Program Efficiency.</p>
                    <p>I was accepted into Hack Reactor's 21st cohort March of 2018, each cohort lasts three months and each student is required to be on campus 12 hours a day 6 days a week. This is a full immersion bootcamp where students have their eduaction equated to drinking from a firehose.</p>
                </div>
            </div>
            <div className="education-container">
                <BannerImage href="https://www.trilogyed.com/" src="/static/TrilogyEducationServices.png" alt="Trilogy Education Logo" />
                <div className="education-container__text">
                    <p>Trilogy Education Services is a national program which plugs into state universities, they offer education in Fullstack Web Devlopment and offer in-person and remote tutoring outside of class.</p>
                    <p>After graduating Hack Reactor I moved on to become a tutor at Trilogy Education Services, where I worked one-on-one with a minimum of 10 students a week offering support in a wide range of topics like CSS fundamentals, jQuery, React, MongoDB, SQL, JavaScript, Python, and Deployment.</p>
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