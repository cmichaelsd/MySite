export interface ThemeContent {
    title: string,
    toneOne: string,
    toneTwo: string,
    textColor: string,
    highlight: string
}

export interface DrawerState {
    sideDrawerOpen: boolean
}

export interface StateContent {
    sideDrawerOpen: boolean,
    theme: ThemeContent
}

export interface AppPropsReceived {
    Component: any,
    pageProps: any
}

export interface BannerImageProps {
    href: string,
    src: string,
    alt: string
}

export interface ActiveLinkProps {
    children: any,
    activeClassName: string,
    href: string
    as: string,
    exact?: boolean
}

export interface SkillProps {
    key: any
    src: any,
    alt: any,
    stars: any,
    children: any
}

export interface PageTemplateProps {
    title: string,
    children: any
}

export interface EventProps {
    action: string,
    category: string,
    label: string,
    value: number
}

export interface SquareImageProps {
    background?: string,
    src: string,
    alt: string,
    href: string
}