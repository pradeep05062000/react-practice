import React, { useState } from 'react'
import { createContext } from "react";


export const ThemeContext = createContext()


export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("dark")
    const toggleTheme = () => {
        setTheme(preTheme => preTheme === "light" ? "dark" : "light")
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>

    )
}
