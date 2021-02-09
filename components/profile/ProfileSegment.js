function ProfileSegment(props) {
    return (
        <>
            <div id={props.id} className="segment">
                <div className="set-width">
                    {props.children}
                </div>
            </div>

            <style jsx>{`
                .segment {
                    padding: 0.5rem 1rem;
                    background: var(--toneTwo);
                }

                .set-width {
                    margin: auto;
                    max-width: 960px;
                }
            `}</style>
        </>
    )
}

export default ProfileSegment
