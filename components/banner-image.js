export default function BannerImage(props) {
    return (
        <div className="banner-image-container">
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                <img className="banner-image" src={props.src} alt={props.alt}></img>
            </a>
            <style jsx>{`
                .banner-container {
                    margin-bottom: 3em;
                }
                .banner-image-container {
                    margin-top: 2em;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                }
                .banner-image {
                    background: #fff;
                    width: 100%;
                }
            `}</style>
        </div>
    );
}