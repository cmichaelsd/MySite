import { useContext } from 'react';
import { NextPage } from 'next';
import UserContext from './usercontext';

const Backdrop: NextPage = () => {
    const { backdropClick } = useContext(UserContext);
    return (
        <div onClick={backdropClick}>
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
        </div>
    );
}

export default Backdrop;