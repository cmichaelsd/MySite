import { createContext } from 'react'
import { Colors }        from '@/res/colors'

export const themes = {
    dark: {
        toneOne:       Colors.dark_tone_one,
        toneTwo:       Colors.dark_tone_two,
        textColor:     Colors.dark_text_color,
        highlight:     Colors.dark_highlight,
        darkHighlight: Colors.dark_darkHighlight
    },
    light: {
        toneOne:       Colors.light_tone_one,
        toneTwo:       Colors.light_tone_two,
        textColor:     Colors.light_text_color,
        highlight:     Colors.light_highlight,
        darkHighlight: Colors.light_darkHighlight
    },
    setTheme: () => { }
}

export const ThemeContext = createContext({
    theme: themes.light,
    setTheme: themes.setTheme
});