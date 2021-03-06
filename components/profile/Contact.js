import { SquareImage } from '@/components/SquareImage'
import { LinkButton }  from '@/components/LinkButton'
import { Strings }     from '@/res/strings'
import { Dimens }      from '@/res/dimens'

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
                <div>
                    <SquareImage 
                        parentBackground={background} 
                        href={Strings.square_image_github_href} 
                        src={Strings.square_image_github_src} 
                        alt={Strings.square_image_github_alt_tag} 
                        height={Dimens.square_image_length} 
                        width={Dimens.square_image_length} 
                    />
                    <LinkButton 
                        background={background}
                        href={Strings.square_image_github_href}
                    >
                        Github
                    </LinkButton>
                </div>
                <div>
                    <SquareImage 
                        parentBackground={background} 
                        href={Strings.square_image_linkedin_href} 
                        src={Strings.square_image_linkedin_src} 
                        alt={Strings.square_image_linkedin_alt_tag} 
                        height={Dimens.square_image_length} 
                        width={Dimens.square_image_length}
                    />
                    <LinkButton 
                        background={background}
                        href={Strings.square_image_linkedin_href}
                    >
                        LinkedIn
                    </LinkButton>
                </div>
            </div>

            <style jsx>{`
                .contact-container {
                    text-align:            center;
                }

                .contact-container__email-me {
                    text-decoration:       underline;
                    color:                 var(--highlight);
                    text-decoration-color: var(--highlight);
                }

                .links-container {
                    display:               flex;
                    justify-content:       center;
                    padding-top:           1em;
                    gap:                   5em;
                }

                @media (max-width: ${Dimens.mobile_media_width}px) {
                    .contact-container {
                        margin-top:        1rem;
                        text-align:        center;
                    }

                    .links-container {
                        display:           flex;
                        flex-direction:    column;
                        align-items:       center;
                        padding-top:       0;
                        gap:               1em;
                    }
                }
            `}</style>
        </>
    )
}
