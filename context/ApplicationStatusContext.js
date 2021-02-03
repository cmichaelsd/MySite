import { createContext } from 'react'

export const statuses = {
    INITIAL_LOADING: 'initial_loading',
    READY: 'ready',
    NAVIGATION_DRAWER_OPEN: 'navigation_drawer_open',

    setStatus: () => { }
};

export const ApplicationStatusContext = createContext({
    status: statuses.INITIAL_LOADING,
    setStatus: statuses.setStatus
});