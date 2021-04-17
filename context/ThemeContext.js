import { createContext } from 'react'
import { Colors } from '../res/colors'

export const themes = {
    dark: {
        toneOne: Colors.dark_tone_one,
        toneTwo: Colors.dark_tone_two,
        textColor: Colors.dark_text_color,
        highlight: Colors.highlight
    },
    light: {
        toneOne: Colors.light_tone_one,
        toneTwo: Colors.light_tone_two,
        textColor: Colors.light_text_color,
        highlight: Colors.highlight
    },
    setTheme: () => { }
}

export const ThemeContext = createContext({
    theme: themes.light,
    setTheme: themes.setTheme
});