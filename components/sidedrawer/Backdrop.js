import { useContext } from 'react'
import { ApplicationStatusContext } from '../../context/ApplicationStatusContext'
import { Events } from '../../events'

function Backdrop() {
    const { changeStatus } = useContext(ApplicationStatusContext);

	return (
		<>
			<div id="backdrop" onClick={() => changeStatus(Events.NAVIGATION_DRAWER_CLOSED)}></div>

			<style jsx global>{`
               #backdrop {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 1;
                }

                #content {
                    filter: blur(3px) contrast(.8) brightness(.8);
                }
            `}</style>
		</>
	)
}

export default Backdrop;