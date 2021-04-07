import SquareImage from '../../SquareImage'
import Checkmark from '../../svgs/Checkmark'

function TrilogyEducation({background}) {
    return (
        <div className="project">
            <SquareImage parentBackground={background} src="https://d3p2ju5slp2tm7.cloudfront.net/Trilogy-Web.png" alt="Trilogy Logo" height="150" width="150" />
            <div className="project__content">
                <h1 className="headline">Trilogy Education</h1>
                <h2>Software Engineer Tutor</h2>
                <p>I perform administrative tasks, manage a roster of students, and create progress reports to show a history of improving competence in software engineering.</p>
                <h4>Role Focus</h4>
                <p>Meet one on one with an average of 10 students a week for tutoring sessions on the Trilogy Education curriculum. Perform administrative tasks such as creating student progress reports using Google Forms and personal discretion.</p>
                <h4>Key Outcomes</h4>
                <ul>
                    <li><Checkmark /> <div>I saw a dramatic improvement in student performance and understanding of software engineering principles throughout tutoring sessions.</div></li>
                </ul>
            </div>
        </div>
    )
}

export default TrilogyEducation