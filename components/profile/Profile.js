import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import ProfileSegment from './ProfileSegment'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Education from './Education'
import Contact from './Contact'

function Profile() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div id="profile">
                <ProfileSegment id="about" background={theme.toneOne}>
                    <About background={theme.toneOne} />
                </ProfileSegment>

                <ProfileSegment id="experience" background={theme.toneTwo}>
                    <Experience background={theme.toneTwo} />
                </ProfileSegment>

                {/*<ProfileSegment id="projects" background={theme.toneOne}>
                    <Projects />
                </ProfileSegment>*/}

                <ProfileSegment id="education" background={theme.toneOne}>
                    <Education background={theme.toneOne} />
                </ProfileSegment>

                <ProfileSegment id="contact" background={theme.toneTwo}>
                    <Contact background={theme.toneTwo} />
                </ProfileSegment>
            </div>

            <style jsx>{`
                #profile {
                    margin: var(--navAndFooterOffset);
                }
            `}</style>
        </>
    )
}

export default Profile