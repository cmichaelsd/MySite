import { createContext } from 'react'

export const themes = {
    dark: {
        toneOne: '#272727',
        toneTwo: '#232323',
        textColor: '#fff',
        highlight: '#fa923f'
    },
    light: {
        toneOne: '#fff',
        toneTwo: '#fafafa',
        textColor: '#121212',
        highlight: '#fa923f'
    },
    setTheme: () => { }
}

export const ThemeContext = createContext({
    theme: themes.light,
    setTheme: themes.setTheme
});