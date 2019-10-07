import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";


const useDarkMode = (initialValue) => {
    const [darkMode, setdarkMode] = useLocalStorage("dark-mode", initialValue);
    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove("dark-mode");

    }, [darkMode]);

    return [darkMode, setdarkMode];
};

export default useDarkMode;