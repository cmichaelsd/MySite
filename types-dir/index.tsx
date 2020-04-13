export interface ThemeContent {
    title:     string,
    toneOne:   string,
    toneTwo:   string,
    textColor: string,
    highlight: string
}

export interface DrawerState {
    sideDrawerOpen: boolean
}

export interface StateContent {
    sideDrawerOpen: boolean,
    theme:          ThemeContent,
    innerWidth:     number | undefined,
    clicked:        boolean
}

export interface BannerImageProps {
    href: string,
    src:  string,
    alt:  string
}

export interface PageTemplateProps {
    title:    string,
    children: any
}

export interface EventProps {
    action:   string,
    category: string,
    label:    string,
    value:    number
}

export interface SquareImageProps {
    background?: string,
    src:         string,
    alt:         string,
    href:        string
}

export interface StrokeColorProps {
    h: number,
    s: number,
    l: number
}

export interface WaveProps {
    y:         number,
    length:    number,
    amplitude: number,
    frequency: number
}
