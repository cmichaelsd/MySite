import { Colors } from '../res/colors';
import { Dimens } from '../res/dimens'

export function SquareImage(props) {
    // Background may need to be set for custom colors, else always white.
    const background = props.background || Colors.light_tone_one;

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
                        height: ${Dimens.square_image_size}px;
                        width: ${Dimens.square_image_size}px;
                        background: ${background};
                    }

                    .square-image__container--corners {
                        width: ${Dimens.square_image_size}px;
                        margin: 0 auto;
                        position: relative;
                    }

                    .square-image__container--corners:after {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: ${Dimens.square_image_size}px;
                        height: ${Dimens.square_image_size}px;
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
            <a href={props.href} rel="noreferrer noopener" target="_blank">
                {base()}
            </a>
        )
    }

    return props.href ? clickable() : base()
}
