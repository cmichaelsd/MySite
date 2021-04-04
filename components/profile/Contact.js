import SquareImage from '../SquareImage'

function Contact({background}) {
    return (
        <>
            <div className="contact-container">
                <p>
                    Feel free to send me an email at <a className="contact-container__email-me" href="mailto:cmichaelsd@gmail.com">cmichaelsd@gmail.com</a>
                </p>
            </div>
            <div className="links-container">
                <SquareImage parentBackground={background} href="https://github.com/cmichaelsd" src="https://d3p2ju5slp2tm7.cloudfront.net/Github-Web.png" alt="Github Logo" height="150" width="150" />
                <SquareImage parentBackground={background} href="https://linkedin.com/in/cole-daniel-michaels/" src="https://d3p2ju5slp2tm7.cloudfront.net/LinkedIn-Web.png" alt="LinkedIn Logo" height="150" width="150" />
            </div>

            <style jsx>{`
                .contact-container {
                    text-align: center;
                }

                .contact-container__email-me {
                    color: var(--highlight);
                    text-decoration-color: var(--highlight);
                }

                .links-container {
                    display: flex;
                    justify-content: center;
                    padding-top: 1em;
                }

                @media (max-width: 768px) {
                    .contact-container {
                        margin-top: 1rem;
                        text-align: center;
                    }

                    .links-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding-top: 0;
                    }
                }
            `}</style>
        </>
    )
}

export default Contact