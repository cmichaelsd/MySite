import SquareImage from '../SquareImage'

function Contact() {
    return (
        <>
            <div className="contact-container">
                <p>
                    Feel free to send me an email at <a className="contact-container__email-me" href="mailto:cmichaelsd@gmail.com">cmichaelsd@gmail.com</a>
                </p>
            </div>
            <div className="links-container">
                <SquareImage href="https://github.com/cmichaelsd" src="/static/Github-Web.png" alt="Github Logo" />
                <SquareImage href="https://linkedin.com/in/cole-daniel-michaels/" src="/static/LinkedIn-Web.png" alt="LinkedIn Logo" />
                {/*<SquareImage href="https://glitch.com/@cmichaelsd" src="/static/Glitch-Web.png" alt="Glitch Logo" />*/}
            </div>

            <style jsx>{`
                .contact-container {
                    margin-top: 3rem;
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