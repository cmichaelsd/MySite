import {Plus} from '../svgs/Plus'

function About({background}) {
    return (
        <>
            <div className="profile-image">
                <picture>
                    <source srcSet="https://d3p2ju5slp2tm7.cloudfront.net/ColeMichaelsMobile2.png" media="(max-width: 660px)" />
                    <img src="https://d3p2ju5slp2tm7.cloudfront.net/ColeMichaels2.png" alt="Cole Michaels" />
                </picture>
            </div>
            <h1 className="headline">About Me</h1>
            <p>I am a self-motivated, resourceful, and highly analytical professional. During my career with previous employers, I have attained comprehensive experience in collaborating with technical teams to assess key requirements and concerns, proposing effective technology solutions for the seamless flow of day to day operations. My area of expertise lies in</p>
            <ul>
                <li><Plus /> <div>Strategic Planning</div></li>
                <li><Plus /> <div>Training & Development</div></li>
                <li><Plus /> <div>Team Leadership</div></li>
                <li><Plus /> <div>Test Driven Development</div></li>
                <li><Plus /> <div>API Development</div></li>
                <li><Plus /> <div>Database Management</div></li>
            </ul>
            <p>Equipped with a certification in Advanced Software Engineering, I am able to design full-stack applications with modular well-tested code to boost company revenue, meeting technical and consumer needs. I have verifiable expertise in leveraging various technologies to spearhead the implementation of full-stack features. Known for enhancing and implementing features in large scale projects.</p>
            <p>I orchestrate estimation, planning, and execution of projects, features, and integrations coupled with quality code, new technologies, and architectural design. Well-organized and quality-minded with planning strategies and a true team player who thrives in a fast-paced environment.</p>

            <style jsx>{`
                .profile-image {
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    margin-top: 1rem;
                    height: 500px;
                }

                ul {
                    list-style: none;
                }

                li {
                    margin-bottom: 10px;
                    display: flex;
                    gap: 10px;
                }

                @media (max-width: 660px) {
                    .profile-image {
                        height: 300px;
                    }
                }
            `}</style>
        </>
    )
}

export {About}