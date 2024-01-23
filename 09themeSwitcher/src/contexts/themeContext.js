import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    dark: false,
    switchTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider

export function useTheme(){
    return useContext(ThemeContext)
}

