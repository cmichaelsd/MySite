import { useContext, useState } from 'react'
import { ThemeContext }         from '../../context/ThemeContext'
import { ProfileSegment }       from './ProfileSegment'
import { About }                from './About'
import { Education }            from './Education'
import { Contact }              from './Contact'
import { VShred }               from './experience/VShred'
import { Jijenge }              from './experience/Jijenge'
import { TrilogyEducation }     from './experience/TrilogyEducation'
import { SlideHorizontal }      from '../animations/SlideHorizontal'
import { Strings }              from '../../res/strings'
import { Dimens }               from '../../res/dimens'

export function Profile() {
    const { theme } = useContext(ThemeContext);

    const [animateCompleteOne, setAnimateCompleteOne] = useState(false);

    const [animateCompleteTwo, setAnimateCompleteTwo] = useState(false);
    
    const [animateCompleteThree, setAnimateCompleteThree] = useState(false);

    const [animateCompleteFour, setAnimateCompleteFour] = useState(false);

    return (
        <>
            <div id="profile">
                <ProfileSegment id={`${Strings.about_headline.toLowerCase()}`} background={theme.toneOne}>
                    <About background={theme.toneOne} />
                </ProfileSegment>

                <ProfileSegment id={`${Strings.experience_headline.toLowerCase()}`} background={theme.toneTwo}>
                    <SlideHorizontal toStart={false} setAnimateEnd={setAnimateCompleteOne}>
                            <VShred background={theme.toneTwo} animate={animateCompleteOne}/>
                    </SlideHorizontal>
                </ProfileSegment>

                <ProfileSegment background={theme.toneOne}>
                    <SlideHorizontal setAnimateEnd={setAnimateCompleteTwo}>
                        <TrilogyEducation background={theme.toneOne} animate={animateCompleteTwo} />
                    </SlideHorizontal>
                </ProfileSegment>

                <ProfileSegment background={theme.toneTwo}>
                    <SlideHorizontal toStart={false} setAnimateEnd={setAnimateCompleteThree}>
                        <Jijenge background={theme.toneTwo} animate={animateCompleteThree}/>
                    </SlideHorizontal>
                </ProfileSegment>

                <ProfileSegment id={`${Strings.education_headline.toLowerCase()}`} background={theme.toneOne}>
                    <SlideHorizontal setAnimateEnd={setAnimateCompleteFour}>
                        <Education background={theme.toneOne} animate={animateCompleteFour} />
                    </SlideHorizontal>
                </ProfileSegment>

                <ProfileSegment id={`${Strings.contact_headline.toLowerCase()}`} background={theme.toneTwo}>
                    <Contact background={theme.toneTwo} />
                </ProfileSegment>
            </div>

            <style jsx global>{`
                html {
                    overflow-y:         overlay;
                }

                #profile {
                    padding-top:        ${Dimens.profile_padding_top}px;
                    padding-bottom:     ${Dimens.profile_padding_bottom}px;
                }

                .project {
                    display:            flex;
                    align-content:      center;
                }

                .segment:nth-of-type(2n+1) .project {
                    flex-direction:     row-reverse;
                }

                .project .project__content {
                    margin-left:        4em;
                }

                .project .project__content p {
                    margin:             0 0 12px 0;
                }

                .project ul {
                    list-style:         none;
                }

                .project li {
                    margin-bottom:      10px;
                    display:            flex;
                    gap:                10px;
                }

                @media (max-width: ${Dimens.mobile_media_width}px) {
                    .project {
                        flex-direction: column;
                        align-items:    center;
                    }

                    .segment:nth-of-type(2n+1) .project {
                        flex-direction: column;
                        align-items:    center;
                    }

                    .project .project__content {
                        margin-left:    auto;
                    }
                }
            `}</style>
        </>
    )
}
