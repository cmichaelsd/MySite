import { SquareImage } from '../SquareImage'
import { Strings }     from '../../res/strings'
import { Dimens }      from '../../res/dimens'

export function Contact({background}) {
    return (
        <>
            <div className="contact-container">
                <p>
                    {Strings.contact_text} 
                    <a className="contact-container__email-me" href={`mailto:${Strings.email}`}>{Strings.email}</a>
                </p>
            </div>
            <div className="links-container">
                <SquareImage 
                    parentBackground={background} 
                    href="https://github.com/cmichaelsd" 
                    src="https://d3p2ju5slp2tm7.cloudfront.net/Github-Web.png" 
                    alt={Strings.square_image_github_alt_tag} 
                    height={Dimens.square_image_length} 
                    width={Dimens.square_image_length} 
                />
                <SquareImage 
                    parentBackground={background} 
                    href="https://linkedin.com/in/cole-daniel-michaels/" 
                    src="https://d3p2ju5slp2tm7.cloudfront.net/LinkedIn-Web.png" 
                    alt={Strings.square_image_linkedin_alt_tag} 
                    height={Dimens.square_image_length} 
                    width={Dimens.square_image_length} 
                />
            </div>

            <style jsx>{`
                .contact-container {
                    text-align: center;
                }

                .contact-container__email-me {
                    text-decoration: underline;
                    color: var(--highlight);
                    text-decoration-color: var(--highlight);
                }

                .links-container {
                    display: flex;
                    justify-content: center;
                    padding-top: 1em;
                }

                @media (max-width: ${Dimens.mobile_media_width}px) {
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
