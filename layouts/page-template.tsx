import { useContext } from 'react';
import { NextPage } from 'next';
import UserContext from '../components/usercontext';
import { PageTemplateProps, ThemeContent } from '../types-dir';

const PageTemplate: NextPage<PageTemplateProps> = (props) => {
    const { theme }: { theme: ThemeContent } = useContext(UserContext);
    return (
        <div className="page-template">
            <h2 className="center">{props.title}</h2>
            <div className="smooth-line"></div>
            <div className="story">
                {props.children}
            </div>
            <style jsx>{`
                .page-template {
                    max-width: 660px;
                    min-height: 850px;
                }
                .smooth-line { 
                    display:block;
                    border:none;
                    color: ${theme.textColor};
                    height: 1px;
                    background: ${theme.toneTwo};
                    background: -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 350, from(${theme.highlight}), to(${theme.toneTwo}));
                }
                .story {
                    width: 640px;
                }
                .center {
                    text-align: center;
                }
                @media (max-width: 768px) {
                    .story {
                        width: auto;
                    }
                }
            `}</style>
        </div>
    );
}

export default PageTemplate;