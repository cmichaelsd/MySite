function About() {
    return (
        <>
            <div className="profile-image">
                <a href="https://github.com/cmichaelsd/MySite">
                    <picture>
                        <source srcSet="/static/ColeMichaelsMobile.png" media="(max-width: 660px)" />
                        <img src="/static/ColeMichaels.png" alt="Cole Michaels" />
                    </picture>
                </a>
            </div>
            <p>I'm Cole Michaels.</p>
            <p>
                I'm a fulltime Fullstack Engineer for V Shred.
                I was formerly oncall as a Fullstack Engineer for Jijenge Academy and a Software Engineer Tutor with Trilogy Education Services at UCLA supporting a minimum of 10 students a week in specific technologies within Fullstack Web Development.
            </p>
            <p>
                In March of 2018 I was accepted into Hack Reactor, Los Angeles' 21st cohort. While at Hack Reactor I studied Web Development and gained the skills I use today in my career and met most of my peers within the Los Angeles WebDev community.
            </p>
            <p>
                Outside of Web Development I have been praticing Jiu-Jitsu since July of 2019, I also enjoy spending my freetime practicing classical guitar and improving my sight reading.
            </p>

            <style jsx>{`
                .profile-image {
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    margin-top: 1rem;
                }
            `}</style>
        </>
    )
}

export default About