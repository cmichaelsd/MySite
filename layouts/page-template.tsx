import { useContext } from 'react';
import { NextPage } from 'next';
import UserContext from '../components/usercontext';
import { PageTemplateProps, ThemeContent } from '../types-dir';

const PageTemplate: NextPage<PageTemplateProps> = (props) => {
    const { theme }: { theme: ThemeContent } = useContext(UserContext);
    return (
        <div className="page-template">
            <div className="story">
                {props.children}
            </div>
            <style jsx>{`
                .page-template {
                    font-size: 20px;
                    // max-width: 660px;
                    width: 100%;
                    margin-bottom: 4rem;
                }
                .center {
                    text-align: center;
                }
            `}</style>
        </div>
    );
}

export default PageTemplate;