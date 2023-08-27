import React, { useState, useContext } from 'react'
import sublinks from './data'


const AppContext = React.createContext();

export const AppProvider = ({ children })=> {
    const [isSidebarOpen, setIsSidebarOpen]= useState(false)
    const [isSubmenuOpen, setSubmenuOpen]= useState(true)
    const [location, setlocation] = useState({})
    const [page, setpage] = useState({page:'', links:[]})
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
     const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text)
        setpage(page)
        setSubmenuOpen(true)
        setlocation(coordinates)
        
    }
     const closeSubmenu = () => {
        setSubmenuOpen(false)
    }
    return(
        <AppContext.Provider value={{isSidebarOpen, isSubmenuOpen, closeSubmenu, openSubmenu, closeSidebar, openSidebar, location, page}}>{children}</AppContext.Provider>
    ) 
    
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
