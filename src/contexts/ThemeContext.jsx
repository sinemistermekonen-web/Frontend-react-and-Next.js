import { createContext, usecontext,useState} from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children}) {
    const [theme,setTheme] = useState("light");

    function toggleTheme() {
        setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light"  );
    }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
    const context = usecontext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return context;
}