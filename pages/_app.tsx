import { Fragment } from 'react';
import App from 'next/app';
import Router from 'next/router';
import * as gtag from '../lib/gtag';
import Toolbar from '../components/toolbar';
import SideDrawer from '../components/sidedrawer';
import Backdrop from '../components/backdrop';
import Footer from '../components/footer';
import UserContext from '../components/usercontext';
import { ThemeContent, DrawerState, StateContent } from '../types-dir';
import CanvasFullScreen from '../components/canvas-fullscreen';
import Index from './index';
import { Transition } from 'react-transition-group';

Router.events.on('routeChangeComplete', (url: string): void => {
    gtag.pageview(url);
});

export default class MyApp extends App {
    state: StateContent = {
        innerWidth: undefined,
        clicked: false,
        sideDrawerOpen: false,
        theme: {
            title: 'Light Theme',
            toneOne: '#fff',
            toneTwo: '#fafafa',
            textColor: '#121212',
            highlight: '#fa923f'
        }
    };

    drawerToggleClickHandler = (): void => {
        this.setState((prevState: DrawerState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = (): void => {
        this.setState({ sideDrawerOpen: false });
    };

    themeChangeHandler = (): void => {
        const DarkTheme: ThemeContent = {
            title: 'Dark Theme',
            toneOne: '#272727',
            toneTwo: '#121212',
            textColor: '#fff',
            highlight: '#fa923f'
        }
        const LightTheme: ThemeContent = {
            title: 'Light Theme',
            toneOne: '#fff',
            toneTwo: '#fafafa',
            textColor: '#121212',
            highlight: '#fa923f'
        }
        let temp: ThemeContent = this.state.theme.title === 'Dark Theme' ? LightTheme : DarkTheme;
        this.setState({
            theme: temp
        });
    };

    componentDidMount = (): void => {
        let fur: string = '#f0c048';
        let cheeks: string = '#f62d14';
        let eyes: string = 'gray';
        let fontSize: string = '10px';
        console.log(`
            %c
            ⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣠⣤⣶⣶ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣾⣿⣿⣿⣿ \n
            ⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿ \n
            ⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿ \n
            ⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀%c⢰⣹⡆%c⠀⠀⠀⠀⠀⠀%c⣭⣷%c⠀⠀⠀⠸⣿⣿⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀%c⠈⠉%c⠀⠀⠤⠄⠀⠀⠀%c⠉⠁%c⠀⠀⠀⠀⢿⣿⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿%c⢾⣿⣷%c⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀%c⠠⣿⣿⣷%c⠀⢸⣿⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⡀%c⠉%c⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀%c⠉⠉⠁%c⠀⠀⣿⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿
            `,
            `color: ${fur};font-size: ${fontSize};`,
            `color: ${eyes};font-size: ${fontSize};`,
            `color: ${fur};font-size: ${fontSize};`,
            `color: ${eyes};font-size: ${fontSize};`,
            `color: ${fur};font-size: ${fontSize};`,
            `color: ${eyes};font-size: ${fontSize};`,
            `color: ${fur};font-size: ${fontSize};`,
            `color: ${eyes};font-size: ${fontSize};`,
            `color: ${fur};font-size: ${fontSize};`,
            `color: ${cheeks};font-size: ${fontSize};`,
            `color: ${fur};font-size: ${fontSize};`,
            `color: ${cheeks};font-size: ${fontSize};`,
            `color: ${fur};font-size: ${fontSize};`,
            `color: ${cheeks};font-size: ${fontSize};`,
            `color: ${fur};font-size: ${fontSize};`,
            `color: ${cheeks};font-size: ${fontSize};`,
            `color: ${fur};font-size: ${fontSize};`,
        );
        window.addEventListener('mousedown', this.handleClick);
        window.addEventListener('resize', this.handleWindowResize);
        this.setState({ innerWidth: window.innerWidth });
        setTimeout(() => {
            this.setState({ clicked: true });
        }, 7000);
    };

    componentWillUnmount = (): void => {
        window.removeEventListener('mousedown', this.handleClick);
        window.removeEventListener('resize', this.handleWindowResize);
    };

    handleWindowResize = (): void => {
        const { innerWidth }: { innerWidth: number } = window;
        this.setState({ innerWidth });
    };

    handleClick = (): void => {
        this.setState({ clicked: true });
    };

    render() {
        const duration = 500;

        const defaultStyle: any = {
            width: '100%',
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,
        }

        const transitionStylesOne: any = {
            entering: { opacity: 1 },
            entered:  { opacity: 1 },
            exiting:  { opacity: 0 },
            exited:  { opacity: 0 },
        };

        const transitionStyleTwo: any = {
            entering: { opacity: 0 },
            entered:  { opacity: 0},
            exiting: { opacity: 1 },
            exited: { opacity: 1 },
        };

        return (
            <Fragment>
                <UserContext.Provider value={{
                    theme: this.state.theme,
                    themeChange: this.themeChangeHandler,
                    sideDrawerToggle: this.drawerToggleClickHandler,
                    backdropClick: this.backdropClickHandler,
                    show: this.state.sideDrawerOpen
                }}>
                    <main>
                        <Toolbar />
                        <SideDrawer />
                        {this.state.sideDrawerOpen && <Backdrop />}
                        {
                            this.state.innerWidth && 
                            this.state.innerWidth >= 768 ?
                                <Transition in={!this.state.clicked} timeout={duration}>
                                    {state => {
                                        if (state !== 'exited') {
                                            return (
                                                <div style={{
                                                    ...defaultStyle,
                                                    ...transitionStylesOne[state]
                                                }}>
                                                    <CanvasFullScreen />
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div style={{
                                                    ...defaultStyle,
                                                    ...transitionStyleTwo[state]
                                                }}>
                                                    <Index />
                                                </div>
                                            )
                                        }
                                    }}
                                </Transition>
                            :
                                <Index />
                        }
                        <Footer />
                    </main>
                </UserContext.Provider>
                <style jsx>{`
                    main {
                        margin-top: 55px;
                        display: flex;
                        justify-content: center;
                    }
                `}</style>
            </Fragment>
        );
    }
}