
// TODO: Update to use background tone of profile segment instead of hardcoded toneTwo.
function SquareImage(props) {
    // Background may need to be set for custom colors, else always white.
    const background = props.background || '#fff';

    const base = () => {
        return (
            <>
                <div className="square-image__container">
                    <div className="square-image__container--corners">
                        <img className="square-image" src={props.src} alt={props.alt} height={props.height} width={props.width}></img>
                    </div>
                </div>

                <style jsx>{`
                    .square-image__container {
                        height: 200px;
                        width: 200px;
                        background: ${background};
                    }

                    .square-image__container--corners {
                        width: 200px;
                        margin: 0 auto;
                        position: relative;
                    }

                    .square-image__container--corners:after {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 200px;
                        height: 200px;
                        background:
                            linear-gradient(45deg,  ${props.parentBackground} 75px, transparent 75px),
                            linear-gradient(135deg, ${props.parentBackground} 75px, transparent 75px),
                            linear-gradient(225deg, ${props.parentBackground} 75px, transparent 75px),
                            linear-gradient(315deg, ${props.parentBackground} 75px, transparent 75px);
                    }

                    .square-image {
                        margin-top: 40px;
                        margin-left: 25px;
                        width: 75%;
                    }
                `}</style>
            </>
        )

    }

    const clickable = () => {
        return (
            <a href={props.href}>
                {base()}
            </a>
        );
    }

    return props.href ? clickable() : base();
}

export default SquareImage