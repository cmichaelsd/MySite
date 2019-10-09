import React, { Fragment } from 'react';
import App from 'next/app';
import Router from 'next/router';
import * as gtag from '../lib/gtag'
import Toolbar from '../components/toolbar';
import SideDrawer from '../components/sidedrawer';
import Backdrop from '../components/backdrop';
import Footer from '../components/footer';
import UserContext from '../components/usercontext';

Router.events.on('routeChangeComplete', (url) => {
    gtag.pageview(url)
});

export default class MyApp extends App {
    state = {
        sideDrawerOpen: false,
        theme: {
            title: 'Dark Theme',
            toneOne: '#272727',
            toneTwo: '#121212',
            textColor: '#fff',
            highlight: '#fa923f'
        }
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    themeChangeHandler = () => {
        const DarkTheme = {
            title: 'Dark Theme',
            toneOne: '#272727',
            toneTwo: '#121212',
            textColor: '#fff',
            highlight: '#fa923f'
        }
        const LightTheme = {
            title: 'Light Theme',
            toneOne: '#fff',
            toneTwo: '#fafafa',
            textColor: '#121212',
            highlight: '#fa923f'
        }
        let temp = this.state.theme.title === 'Dark Theme' ? LightTheme : DarkTheme;
        this.setState({
            theme: temp
        });
    };

    componentDidMount() {
        console.log(`
            ⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⣠⣤⣶⣶ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣾⣿⣿⣿⣿ \n
            ⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿ \n
            ⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿ \n
            ⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣴⣿⣿⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿ \n
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿
        `);
    };

    render() {
        const { Component, pageProps } = this.props;
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