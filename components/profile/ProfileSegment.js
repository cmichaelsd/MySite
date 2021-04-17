import { Dimens } from '../../res/dimens'

export function ProfileSegment(props) {
    return (
        <>
            <div id={props.id} className="segment">
                <div className="set-width">
                    {props.children}
                </div>
            </div>

            <style jsx>{`
                .segment {
                    padding: 2rem;
                    background: ${props.background};
                }

                .set-width {
                    margin: auto;
                    max-width: ${Dimens.profile_segment_width}px;
                }
            `}</style>
        </>
    )
}
