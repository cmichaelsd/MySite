import {SquareImage} from '../../SquareImage'
import {Checkmark} from '../../svgs/Checkmark'
import {TiltIn} from '../../animations/TiltIn'

function VShred({background, animate}) {
    return (
        <div className="project">
            <TiltIn trigger={animate}>
                <SquareImage trigger={animate} parentBackground={background} src="https://d3p2ju5slp2tm7.cloudfront.net/VShred-Web.png" alt="V Shred Logo" height="150" width="150" />
            </TiltIn>
            <div className="project__content">
                <h1 className="headline">V Shred</h1>
                <h2>Android Developer</h2>
                <p>I foster coordination with designers for translation of sketch designs into Android UI activities and implement backend logic.</p>
                <h4>Role Focus</h4>
                <p>Develop and implement features for the mobile application utilizing the Kotlin programming language. Coordinate with designers for translation of Sketch designs into activities and Fragments. Leverage Repositories, Live Databinding, and View Models to develop an application in adherence to MVVM architecture.</p>
                <h4>Key Outcomes</h4>
                <ul>
                    <li><Checkmark /><div>Acted as a liaison with iOS developers, assuring identical functioning of both iOS and Android applications. I streamlined the seamless flow of day-to-day tasks, complying with Agile methodology.</div></li>
                    <li><Checkmark /><div>I functioned as the only Android developer and in charge of writing features for the Android application processing over $15,000 in revenue daily.</div></li>
                </ul>

                <h2>Full Stack Engineer</h2>
                <p>I collaborate with designers to design sales pages, boosting revenue and enhancing organization processes.</p>
                <h4>Role Focus</h4>
                <p>Collaborate with designers to create frontend pages in PHP and VueJS, increasing revenue and traffic. Implement new products leveraging Stripe and Braintree to guarantee secure and compliant financial transactions. Manage AWS systems and Cloudfront to serve both quickly and reliably to users around the globe. Generate user insights through tracking services and custom internal services to drive revenue. Increase marketing's ability to target audiences and see real-time conversion rates. Facilitating marketing's vision of new products into existing Laravel codebases.</p>
                <h4>Key Outcomes</h4>
                <ul>
                    <li><Checkmark /><div>I adhered to Agile methodology and steer the completion/partition of appointed assignments effectually.</div></li>
                    <li><Checkmark /><div>Ensured secure user payments by implementing new website products through Stripe and Braintree.</div></li>
                    <li><Checkmark /><div>Wrote features for multiple E-Commerce systems processing millions of dollars annually.</div></li>
                </ul>
            </div>
        </div>
    )
}

export {VShred}