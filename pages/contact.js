import { useContext } from 'react';
import Head from 'next/head';
import UserContext from '../components/usercontext';
import PageTemplate from '../layouts/page-template';
import SquareImage from '../components/square-image';

export default function Contact() {
    const { theme } = useContext(UserContext);
    return (
        <PageTemplate title="Contact">
            <Head>
                <title>Coles Michaels - Contact</title>
            </Head>
            <div className="contact-container">
                <p>
                    Feel free to send me an email at <a className="contact-container__email-me" href="mailto:cmichaelsd@gmail.com">cmichaelsd@gmail.com</a>
                </p>
            </div>
            <div className="links-container">
                <SquareImage href="https://github.com/cmichaelsd" src="/static/Github-Web.webp" alt="Github Logo" />
                <SquareImage href="https://linkedin.com/in/cole-daniel-michaels/" src="/static/LinkedIn-Web.webp" alt="LinkedIn Logo" />
                <SquareImage href="https://glitch.com/@cmichaelsd" src="/static/Glitch-Web.webp" alt="Glitch Logo" />
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
                } 
            `}</style>
        </PageTemplate>
    );
};