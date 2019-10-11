import { useContext } from 'react';
import { NextPage } from 'next';
import UserContext from '../components/usercontext';
import { SquareImageProps, ThemeContent } from '../types';

const SquareImage: NextPage<SquareImageProps> = (props) => {
    const { theme }: { theme: ThemeContent } = useContext(UserContext);
    let background: string = props.background || "#fff";
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            <div className="square-image__container">
                <div className="square-image__container--corners">
                    <img className="square-image" src={props.src} alt={props.alt}></img>
                </div>
            </div>
            <style jsx>{`
                .square-image__container {
                    height: 200px;
                    width: 200px;
                    background: ${background};
                }
                .square-image__container--corners {
                    width: 200px;
                    margin: 0 auto;
                    position: relative;
                }
                .square-image__container--corners:after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 200px;
                    height: 200px;
                    background:
                        linear-gradient(45deg,  ${theme.toneTwo} 75px, transparent 75px),
                        linear-gradient(135deg, ${theme.toneTwo} 75px, transparent 75px),
                        linear-gradient(225deg, ${theme.toneTwo} 75px, transparent 75px),
                        linear-gradient(315deg, ${theme.toneTwo} 75px, transparent 75px);
                }
                .square-image {
                    margin-top: 40px;
                    margin-left: 25px;
                    width: 75%;
                }
            `}</style>
        </a>
    );
}

export default SquareImage;