import {SquareImage} from '../../SquareImage'
import {Checkmark} from '../../svgs/Checkmark'

function Jijenge({background}) {
    return (
        <div className="project">
            <SquareImage parentBackground={background} background="#f16870" src="https://d3p2ju5slp2tm7.cloudfront.net/Jijenge-Web.png" alt="Jijenge Logo" height="150" width="150" />
            <div className="project__content">
                <h1 className="headline">Jijenge Academy</h1>
                <h2>Full Stack Engineer</h2>
                <p>I developed components through the utilization of React to build scalable and reusable features.</p>
                <h4>Role Focus</h4>
                <p>Coordinated with the Boston based Jijenge Team and other Full Stack Engineers to design and develop the Jijenge site from conception to completion. Generated components through the utilization of React to build scalable and reusable features. Led the effective implementation of Stripe for users' donations, managing secure transactions for Jijenge Academy. Designed the architecture of the NodeJS serve for Jijenge in order to handle traffic and API requests from the users.</p>
                <h4>Key Outcomes</h4>
                <ul>
                    <li><Checkmark /> <div>Generated revenue up to $10K in the first month to mentor Kenyan students on technical skills.</div></li>
                </ul>
            </div>
        </div>
    )
}

export {Jijenge}