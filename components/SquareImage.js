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
                        height:     ${Dimens.square_image_length}px;
                        width:      ${Dimens.square_image_length}px;
                        transform:  rotate(45deg);
                        overflow:   hidden;
                        margin:     50px 50px;
                    }

                    .square-image__container--corners {
                        background: ${background};
                    }

                    .square-image {
                        max-width:  100%;
                        transform:  rotate(-45deg) scale(1);
                        position:   relative;
                        margin:     10px 0 0 10px;
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
