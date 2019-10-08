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
        },
        intervalID: 0,
        starMan: null
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

    starClickHandler = () => {
        this.state.starMan.volume = 1;
        if (this.state.intervalID) {
            clearInterval(this.state.intervalID);
            this.state.intervalID = 0;
            this.state.starMan.pause();
            this.state.starMan.currentTime = 0;
        } else {
            this.state.starMan.addEventListener(
                "ended",
                function () {
                    this.currentTime = 0;
                    this.play();
                },
                false
            );
            this.state.starMan.play();
            this.state.intervalID = setInterval(() => {
                let temp = {
                    title: 'Star Theme',
                    toneOne: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                    toneTwo: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                    textColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`
                }
                this.setState({
                    theme: temp
                });
            }, 200);
        }
    };

    componentDidMount() {
        let starMan = new Audio('/static/Starman.mp3');
        this.setState({
            starMan: starMan
        });
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
                    starHandler: this.starClickHandler,
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