import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPreferences = window.localStorage.getItem("theme");

        // This function will check if there is any user preference for darl or regular mode in the local storage
        const handleChange = () => {
            if(userPreferences) {
                let screenMode = userPreferences === "dark" ? "dark" : "light";
                setMode(screenMode);

                if (screenMode === "dark") {
                    document.documentElement.classList.add("dark");
                }
                else {
                    document.documentElement.classList.remove("dark");
                }
            }
            else {
                let screenMode = mediaQuery.matches ? "dark" : "light";
                setMode(screenMode);

                if (screenMode === "dark") {
                    document.documentElement.classList.add("dark");
                }
                else {
                    document.documentElement.classList.remove("dark");
                }
            }
        }
        
        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange) 
    
    }, []);

    // Update values in the local storage after any "mode" change.
    useEffect(() => {
        if (mode === "dark") {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
        else {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }, [mode])
    
    return [mode, setMode]
}

export default useThemeSwitcher;