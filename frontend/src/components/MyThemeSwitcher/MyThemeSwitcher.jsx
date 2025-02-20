import { useState, useEffect } from 'react';

import './MyThemeSwitcher.css';

function MyThemeSwitcher() {
    const [theme, setTheme] = useState(() => localStorage.getItem('MyTheme') || 'light'); 

    useEffect(() => {
       
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem('MyTheme', theme);  
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);  
    };

    const containerStyles = {
        background: theme === "light" ? "#666" : "#DDD",
        width: "50px",
        height: "25px",
        borderRadius: "12.5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2px",
        cursor: "pointer",
        boxSizing: "border-box",
    };
    const buttonStyles = {
        width: "21px",
        height: "21px",
        borderRadius: "50%",
        backgroundColor: theme === "light" ? "#FFF" : "#333",
        transition: "transform 0.25s ease-out",
        transform: theme === "light" ? "translateX(0)" : "translateX(24px)",
    };

    return (
        <div className="theme-switcher-container">
            <div style={containerStyles} onClick={toggleTheme}>
                <div style={buttonStyles}></div>
            </div>
        </div>
    );
}

export default MyThemeSwitcher;
