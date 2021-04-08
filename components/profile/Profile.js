import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import {ProfileSegment} from './ProfileSegment'
import {About} from './About'
import {Education} from './Education'
import {Contact} from './Contact'
import {VShred} from './experience/VShred'
import {Jijenge} from './experience/Jijenge'
import {TrilogyEducation} from './experience/TrilogyEducation'
import {SlideHorizontal} from '../animations/SlideHorizontal'

function Profile() {
    const { theme } = useContext(ThemeContext);

    const [animateCompleteOne, setAnimateCompleteOne] = useState(false);

    const [animateCompleteTwo, setAnimateCompleteTwo] = useState(false);
    
    const [animateCompleteThree, setAnimateCompleteThree] = useState(false);

    return (
        <>
            <div id="profile">
                <ProfileSegment id="about" background={theme.toneOne}>
                    <About background={theme.toneOne} />
                </ProfileSegment>

                <ProfileSegment id="experience" background={theme.toneTwo}>
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

                <ProfileSegment background={theme.toneOne}>
                    <SlideHorizontal>
                        <Education background={theme.toneOne} />
                    </SlideHorizontal>
                </ProfileSegment>

                <ProfileSegment id="contact" background={theme.toneTwo}>
                    <Contact background={theme.toneTwo} />
                </ProfileSegment>
            </div>

            <style jsx global>{`
                #profile {
                    padding: var(--navAndFooterOffset);
                }

                .project {
                    display: flex;
                    align-content: center;
                }

                .segment:nth-of-type(2n+1) .project {
                    flex-direction: row-reverse;
                }

                .project .project__content {
                    margin-left: 4em;
                }

                .project .project__content p {
                    margin: 0 0 12px 0;
                }

                .project ul {
                    list-style: none;
                }

                .project li {
                    margin-bottom: 10px;
                    display: flex;
                    gap: 10px;
                }

                @media (max-width: 768px) {
                    .project {
                        flex-direction: column;
                        align-items: center;
                    }

                    .segment:nth-of-type(2n+1) .project {
                        flex-direction: column;
                    }

                    .project .project__content {
                        margin-left: auto;
                    }
                }
            `}</style>
        </>
    )
}

export {Profile}