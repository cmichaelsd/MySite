import { Colors } from "@/res/colors"

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
                    display:         flex;
                    justify-content: center;
                    align-content:   center;
                    height:          ${props.height}px;
                } 

                .banner-image {
                    background:      ${Colors.light_tone_one};
                    width:           100%;
                }
            `}</style>
        </>
    )
}
