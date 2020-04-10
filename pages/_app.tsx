import { Fragment } from 'react';
import App from 'next/app';
import Router from 'next/router';
import * as gtag from '../lib/gtag';
import Toolbar from '../components/toolbar';
import SideDrawer from '../components/sidedrawer';
import Backdrop from '../components/backdrop';
import Footer from '../components/footer';
import UserContext from '../components/usercontext';
import { ThemeContent, DrawerState, StateContent, AppPropsReceived } from '../types-dir';

Router.events.on('routeChangeComplete', (url: string): void => {
    gtag.pageview(url);
});

export default class MyApp extends App {
    state: StateContent = {
        sideDrawerOpen: false,
        theme: {
            title: 'Dark Theme',
            toneOne: '#272727',
            toneTwo: '#121212',
            textColor: '#fff',
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
    };

    render() {
        const { Component, pageProps }: AppPropsReceived = this.props;
        return (
            <Fragment>
                <UserContext.Provider value={{
                    theme: this.state.theme,
                    themeChange: this.themeChangeHandler,
                    sideDrawerToggle: this.drawerToggleClickHandler,
                    backdropClick: this.backdropClickHandler,
                    show: this.state.sideDrawerOpen
                }}>
                    <Toolbar />
                    <SideDrawer />
                    {this.state.sideDrawerOpen && <Backdrop />}
                    <main>
                        <Component {...pageProps} />
                    </main>
                    <Footer />
                </UserContext.Provider>
                <style jsx>{`
                    main {
                        margin-top: 64px;
                        display: flex;
                        justify-content: center;
                    }
                `}</style>
            </Fragment>
        );
    }
}