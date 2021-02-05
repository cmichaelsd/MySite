import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ApplicationStatusContext, statuses } from '../context/ApplicationStatusContext'
import ProfileSegment from './ProfileSegment'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Contact from './Contact'

function Profile() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div>
                <ProfileSegment id="about" background={theme.toneOne}>
                    <About />
                </ProfileSegment>

                <ProfileSegment id="experience" background={theme.toneTwo}>
                    <Experience />
                </ProfileSegment>

                <ProfileSegment id="education" background={theme.toneOne}>
                    <Education />
                </ProfileSegment>

                <ProfileSegment id="contact" background={theme.toneTwo}>
                    <Contact />
                </ProfileSegment>
            </div>

            <style jsx>{`
                div {
                    margin: 75px 0 42px 0;
                }
            `}</style>
        </>
    )
}

export default Profile