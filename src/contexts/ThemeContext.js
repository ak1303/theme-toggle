import { useContext } from "react";
import React from "react";

export const ThemeContext = React.createContext({
    themeMode:"light",
    lightMode: ()=>{},//will overwrite(/define) in App.jsx
    darkMode: ()=>{}
}); 

export const ThemeProvider = ThemeContext.Provider;

const useTheme = () =>{
    return useContext(ThemeContext);
}
export default useTheme;