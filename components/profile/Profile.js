import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import ProfileSegment from './ProfileSegment'
import About from './About'
import Education from './Education'
import Contact from './Contact'
import VShred from './experience/VShred'
import TrilogyEducation from './experience/TrilogyEducation'
import Jijenge from './experience/Jijenge'

function Profile() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div id="profile">
                <ProfileSegment id="about" background={theme.toneOne}>
                    <About background={theme.toneOne} />
                </ProfileSegment>

                <ProfileSegment id="experience" background={theme.toneTwo}>
                    <VShred background={theme.toneTwo} />
                </ProfileSegment>

                <ProfileSegment id="experience" background={theme.toneOne}>
                    <TrilogyEducation background={theme.toneOne} />
                </ProfileSegment>

                <ProfileSegment id="experience" background={theme.toneTwo}>
                    <Jijenge background={theme.toneTwo} />
                </ProfileSegment>

                <ProfileSegment id="education" background={theme.toneOne}>
                    <Education background={theme.toneOne} />
                </ProfileSegment>

                <ProfileSegment id="contact" background={theme.toneTwo}>
                    <Contact background={theme.toneTwo} />
                </ProfileSegment>
            </div>

            <style jsx global>{`
                #profile {
                    margin: var(--navAndFooterOffset);
                }

                .project {
                    display: flex;
                    align-content: center;
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

                    .project .project__content {
                        margin-left: auto;
                    }
                }
            `}</style>
        </>
    )
}

export default Profile