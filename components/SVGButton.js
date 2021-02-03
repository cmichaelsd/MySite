function SVGButton(props) {
    return (
        <button className="svgButton" onClick={() => props.svgButtonAction()}>
            {props.children}

            <style jsx>{`
                .svgButton {
                    background: none;
                    border: none;
                    cursor: pointer;
                }

                .svgButton:focus {
                    outline: none;
                }
            `}</style>
        </button>
    );
}

export default SVGButton;