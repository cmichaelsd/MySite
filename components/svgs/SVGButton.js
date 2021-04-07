function SVGButton(props) {
    return (
        <button className="svgButton" aria-label={props.label} onClick={() => props.svgButtonAction()}>
            {props.children}

            <style jsx global>{`
                .svgButton {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                }

                .svgButton:focus {
                    outline: none;
                }

                .svgButton svg {
                    fill: var(--textColor);
                }

                .svgButton .svgHighlight:hover {
                    fill: var(--highlight);
                }
            `}</style>
        </button>
    )
}

export {SVGButton}