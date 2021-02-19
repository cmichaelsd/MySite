function BannerImage(props) {
    return (
        <>
            <div className="banner-image-container">
                <div>
                    <img className="banner-image" src={props.src} alt={props.alt} height={props.height}></img>
                </div>
            </div>

            <style jsx>{`
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
        </>
    )
}

export default BannerImage