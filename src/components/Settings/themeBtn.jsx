import React from 'react'
import { useTheme } from '../../contexts/themecontext'

function ThemeBtn () {
    const{theme,toggleTheme} = useTheme()
    return(
        <>
        <button onClick={toggleTheme}>
            Switch to {theme === "dark" ? "light" : "dark"}
        </button>
        </>
    )
}

export default ThemeBtn