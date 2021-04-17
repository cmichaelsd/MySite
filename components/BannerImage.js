import { Dimens } from "../res/dimens";

export function BannerImage(props) {
    return (
        <>
            <div className="banner-image-container">
                <div>
                    <img className="banner-image" src={props.src} alt={props.alt}></img>
                </div>
            </div>

            <style jsx>{`
                .banner-image-container {
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    height: ${props.height}px;
                }

                .banner-image {
                    background: #fff;
                    width: 100%;
                }

                @media (max-width: ${Dimens.mobile_image_width}px) {
                    .banner-image-container {
                        height: ${props.altHeight ? props.altHeight : props.height}px;
                    }
                }
            `}</style>
        </>
    )
}
