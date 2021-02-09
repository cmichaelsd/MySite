import Plus from '../svgs/Plus'

function About() {
    return (
        <>
            <div className="profile-image">
                <picture>
                    <source srcSet="/static/ColeMichaelsMobile2.png" media="(max-width: 660px)" />
                    <img src="/static/ColeMichaels2.png" alt="Cole Michaels" />
                </picture>
            </div>
            <h1>About Me</h1>
            <p>I am a self-motivated, resourceful, and highly analytical professional. During my career with previous employers, I have attained comprehensive experience in collaborating with technical teams to assess key requirements and concerns, proposing effective technology solutions for the seamless flow of day to day operations. My area of expertise lies in</p>
            <ul>
                <li><Plus /> Strategic Planning</li>
                <li><Plus /> Training & Development</li>
                <li><Plus /> Team Leadership</li>
                <li><Plus /> Test Driven Development</li>
                <li><Plus /> API Development</li>
                <li><Plus /> Database Management</li>
            </ul>
            <p>Equipped with a certification in Advanced Software Engineering, I am able to design full-stack applications with modular well-tested code to boost company revenue, meeting technical and consumer needs. I have verifiable expertise in leveraging various technologies to spearhead the implementation of full-stack features. Known for enhancing and implementing features in large scale projects.</p>
            <p>I orchestrate estimation, planning, and execution of projects, features, and integrations coupled with quality code, new technologies, and architectural design. Well-organized and quality-minded with planning strategies and a true team player who thrives in a fast-paced environment.</p>

            <style jsx>{`
                .profile-image {
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    margin-top: 1rem;
                }

                ul {
                    list-style: none;
                }
            `}</style>
        </>
    )
}

export default About