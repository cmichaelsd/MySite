import { useContext } from 'react'
import { ApplicationStatusContext } from '../../context/ApplicationStatusContext'
import { Events } from '../../events'

function Backdrop() {
    const { changeStatus } = useContext(ApplicationStatusContext);

	return (
		<>
			<div onClick={() => changeStatus(Events.NAVIGATION_DRAWER_CLOSED)}></div>

			<style jsx>{`
                div {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background: rgba(0, 0, 0, 0.3);
                    z-index: 100;
                }
            `}</style>
		</>
	)
}

export default Backdrop;