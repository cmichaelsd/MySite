import SquareImage from '../SquareImage'
import Checkmark from '../svgs/Checkmark'

// TODO: Replace bullets with emojis / catching bullets
function Experience() {
    return (
        <>
            <ul className="projects">
                <li className="project">
                    <SquareImage src="/static/VShred-Web.png" alt="V Shred Logo" />
                    <div className="project__content">
                        <h1>V Shred</h1>
                        <h2>Android Developer</h2>
                        <p>I foster coordination with designers for translation of sketch designs into Android UI activities and implement backend logic.</p>
                        <h4>Role Focus</h4>
                        <p>Provide support to develop and implement features for the V Shred native Android application, utilizing the Kotlin programming language. Use Repositories, Live Databinding, and View Models to develop applications in adherence to MVVM architecture.</p>
                        <h4>Key Outcomes</h4>
                        <ul>
                            <li><Checkmark /> <div>Acted as a liaison with iOS developers, assuring identical functioning of both iOS and Android applications. I streamlined the seamless flow of day-to-day tasks, complying with Agile methodology.</div></li>
                            <li><Checkmark /> <div>I functioned as the only Android developer and in charge of writing features for the Android application processing over $15,000 in revenue daily.</div></li>
                        </ul>

                        <h2>Full Stack Engineer</h2>
                        <p>I collaborate with designers to design sales pages, boosting revenue and enhancing organization processes.</p>
                        <h4>Role Focus</h4>
                        <p>Analyze sales pages through benchmarking tools, optimizing pages to improve conversion rates from users. Provide higher features regularly to the company's E-Commerce platforms. I operate as a liaison to maintain code quality, organization, and automatization, implementing measures to improve users' analytics. I facilitate the execution of database schema and seeding in Laravel's Eloquent to retain data consistency for local environments, directing management of migrations to production.</p>
                        <h4>Key Outcomes</h4>
                        <ul>
                            <li><Checkmark /> <div>I adhered to Agile methodology and steer the completion/partition of appointed assignments effectually.</div></li>
                            <li><Checkmark /> <div>Ensured secure user payments by implementing new website products through Stripe and Braintree.</div></li>
                            <li><Checkmark /> <div>Wrote features for multiple E-Commerce systems processing one hundred million dollars annually.</div></li>
                        </ul>
                    </div>
                </li>
                <li className="project">
                    <SquareImage background="#f16870" src="/static/Jijenge-Web.png" alt="Jijenge Logo" />
                    <div className="project__content">
                        <h1>Jijenge Academy</h1>
                        <h2>Full Stack Engineer</h2>
                        <p>I developed components through the utilization of React to build scalable and reusable features.</p>
                        <h4>Role Focus</h4>
                        <p>Coordinated with the Boston based Jijenge Team and other Full Stack Engineers to design and develop the site from conception to completion. Led the effective implementation of Stripe for users' donation, managing tightly handle transactions for Jijenge Academy. I orchestrated the establishment and design of server in NodeJS to steer traffic and API requests from the users.</p>
                        <h4>Key Outcomes</h4>
                        <ul>
                            <li><Checkmark /> <div>Generated revenue up to $10K in the first month to mentor Kenyan students on technical skills.</div></li>
                        </ul>
                    </div>
                </li>
                <li className="project">
                    <SquareImage src="/static/Trilogy-Web.png" alt="Trilogy Logo" />
                    <div className="project__content">
                        <h1>SculptNation</h1>
                        <h2>Software Engineer Tutor</h2>
                        <p>I perform administrative tasks, manage a roster of students, and create progress reports to show a history of improving competence in software engineering.</p>
                        <h4>Role Focus</h4>
                        <p>Meet one on one with an average of 10 students a week for tutoring sessions on the Trilogy Education curriculum. Perform administrative tasks such as creating student progress reports using Google Forms and personal discretion.</p>
                        <h4>Key Outcomes</h4>
                        <ul>
                            <li><Checkmark /> <div>I saw a dramatic improvement in student performance and understanding of software engineering principles through out tutoring sessions.</div></li>
                        </ul>
                    </div>
                </li>
            </ul>

            <style jsx>{`
                .project {
                    display: flex;
                    align-content: center;
                }

                .projects {
                    padding: 20px;
                }

                .project__content {
                    margin-left: 4em;
                }

                .project__content p {
                    margin: 0 0 12px 0;
                }

                ul {
                    list-style: none;
                }

                li {
                    display: flex;
                    gap: 5px;
                }

                @media (max-width: 768px) {
                    .project {
                        flex-direction: column;
                        align-items: center;
                    }

                    .project__content {
                        margin-left: auto;
                    }
                }
            `}</style>
        </>
    )
}

export default Experience