import React,{useState} from "react"
import "../dist/darkTheme.css"
const body = document.querySelector("body");

function DarkMode(){
    const setDarkMode = () => {
        if(body) {
            body.setAttribute('data-theme', 'dark')
            localStorage.setItem("selectedTheme","dark");
        }
    }
    const setLightMode = () => {
        if(body) {
            body.setAttribute('data-theme', 'light')
            localStorage.setItem("selectedTheme","light");
        }
    }

    const selectedTheme = localStorage.getItem("selectedTheme");
    if(selectedTheme === "dark") {
        setDarkMode();
    }
    const toggleTheme = (e :React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    }
    return(
        <div className="darkMode">
            <input type="checkbox"
                    className="darkMode_input" 
                    onChange={toggleTheme}
                    defaultChecked={selectedTheme ==="dark"}
                    id="darkMode_toggle" />
                    <label htmlFor="darkMode_toggle">DarkMode on?</label>
        </div>
    )
}

export default DarkMode