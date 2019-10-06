import { useContext } from 'react';
import UserContext from '../components/usercontext';
import PageTemplate from '../layouts/page-template';
import SquareImage from '../components/square-image';

export default function Contact() {
    const { theme } = useContext(UserContext);
    return (
        <PageTemplate title="Contact">
            <div className="contact-container">
                <p>
                    Feel free to send me an email at <a className="contact-container__email-me" href="mailto:cmichaelsd@gmail.com">cmichaelsd@gmail.com</a>
                </p>
            </div>
            <div className="links-container">
                <a className="links-container__flex-start first" href="https://github.com/cmichaelsd" target="_blank" rel="noopener noreferrer">
                    <SquareImage src="/static/Github-Web.png" alt="Github Logo" />
                </a>
                <a className="links-container__middle" href="https://linkedin.com/in/cole-daniel-michaels/" target="_blank" rel="noopener noreferrer">
                    <SquareImage src="/static/LinkedIn-Web.png" alt="LinkedIn Logo" />
                </a>
                <a className="links-container__flex-start" href="https://glitch.com/@cmichaelsd" target="_blank" rel="noopener noreferrer">
                    <SquareImage src="/static/Glitch-Web.png" alt="Glitch Logo" />
                </a>
            </div>
            <style jsx>{`
                .contact-container {
                    margin-top: 3rem;
                    text-align: center;
                }
                .contact-container__email-me {
                    color: ${theme.highlight};
                    text-decoration-color: ${theme.highlight};
                }
                .links-container {
                    display: flex;
                    justify-content: center;
                    padding-top: 5em;
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
                        margin-bottom: 4rem;
                    }
                    .links-container__flex-start {
                        align-self: flex-start;
                    }
                    .links-container__middle {
                        align-self: flex-end;
                    }
                } 
            `}</style>
        </PageTemplate>
    );
};