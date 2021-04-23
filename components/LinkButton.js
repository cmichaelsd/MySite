export function LinkButton({href, children, background}) {
    return (
        <>
            <div>
                <button>
                    <a href={href} rel="noreferrer" target="_blank">{children}</a>
                </button>
            </div>

            <style jsx>{`
                div {
                    display:         flex;
                    justify-content: center;
                    align-items:     center;
                }

                button {
                    position:         relative;
                    width:            100px;
                    background:       linear-gradient(to right, var(--highlight), var(--darkHighlight));
                    cursor:           pointer;
                    border:           2px solid var(--highlight);
                    border-radius:    5%;
                    padding:          0;
                    color:            var(--highlight);
                    margin:           10px;
                }

                button::before,
                button::after {
                    content:          "";
                    position:         absolute;
                    left:             0;
                    right:            0;
                    top:              0;
                    bottom:           0;
                    background:       linear-gradient(to right, var(--highlight), var(--darkHighlight));
                    border-radius:    5%;
                    transition:       all 1s ease-in-out;
                }

                button:hover::before {
                    filter:           blur(2px);
                }

                button:hover::after {
                    filter:           blur(4px);
                }

                button a {
                    position:         relative;
                    z-index:          3;
                    display:          block;
                    padding:          5px;
                    background-color: ${background};
                    border-radius:    4%;
                    font-weight:      600;
                    color:            var(--darkHighlight);
                    letter-spacing:   2px;
                }

                button:hover {
                    animation:        hue 3s linear infinite;
                }

                @keyframes hue {
                    0% {
                        filter:       hue-rotate(0deg);
                    }
                    50% {
                        filter:       hue-rotate(-30deg);
                    }
                    100% {
                        filter:       hue-rotate(0deg);
                    }
                }
            `}</style>
        </>
    )
}