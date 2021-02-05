function About() {
    return (
        <>
            <div className="profile-image">
                <a href="">
                    <picture>
                        <source srcSet="/static/ColeMichaelsMobile.png" media="(max-width: 660px)" />
                        <img src="/static/ColeMichaels.png" alt="Cole Michaels" />
                    </picture>
                </a>
            </div>
            <p>I'm Cole Michaels.</p>
            <p>I am a self-motivated, resourceful, and highly analytical professional. During my career with previous employers, I have attained comprehensive experience in collaborating with technical teams to assess key requirements and concerns, proposing effective technology solutions for the seamless flow of day to day operations. My area of expertise lies in</p>
            <ul>
                <li>Strategic Planning</li>
                <li>Training & Development</li>
                <li>Team Leadership</li>
                <li>Test Driven Development</li>
                <li>API Development</li>
                <li>Database Management</li>
            </ul>
            <p>Equipped with a certification in Advanced Software Engineering, I am able to design full-stack applications with modular well-tested code to boost company revenue, meeting technical and consumer needs. I have verifiable expertise in leveraging various technologies to spearhead the management of user interactions on web pages. Known for establishing a user-friendly environment by enhancing internal tooling and coordinating with product platform teams.</p>
            <p>I orchestrate estimation, planning, and execution of projects, features, and integrations coupled with supporting code quality, new technologies, and architectural design within the company. Well-organized and quality-minded with planning strategies and a true team player who thrives in a fast-paced environment.</p>
            <p>Furthermore, I partner with product managers, designers, and analysts to determine user needs and develop infrastructure. Harness collective team synergy to administer qualitative research from conception to completion while enhancing features and steering web development functions.</p>

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