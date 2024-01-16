import { useEffect, useState } from "react";

const useTheme = () => {
    const [mode, setMode] = useState("light");

    const handleModeChange = () => {
        const html = document.documentElement;
        if (mode === "light") {
            html.classList.remove("light");
            html.classList.add("dark");
            localStorage.setItem("mode", "dark");
            setMode("dark")
        }
        else if (mode === "dark") {
            html.classList.remove("dark");
            html.classList.add("light");
            localStorage.setItem("mode", "light");
            setMode("light")
        }
    }
    useEffect(() => {
        const theme = localStorage.getItem("mode") || "light";
        const html = document.documentElement
        if (theme) {
            setMode(theme);
            html.classList.add(theme)
        }
    }, [])

    return { mode, handleModeChange }
}

export default useTheme