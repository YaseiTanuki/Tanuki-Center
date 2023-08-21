/*BEGIN IMPORT*/
//Package
import {NavLink} from 'react-router-dom'
import { useState, useEffect } from "react";
//Components
import Logo from "../Logo/Logo";

//Styles
import './NavigationBar.scss'
/*END IMPORT*/
const NavigationBar = () => {
    const [BrightLogo, DarkLogo] = Logo();
    const [CurrentLogo, setCurrentLogo] = useState(BrightLogo);
    const [TextColor, setTextColor] = useState("black");

    const ChangeColor = () => {
        if(window.scrollY < 720){
            // setTextColor("black")
            // return setCurrentLogo(BrightLogo);
            return;
        }
        setTextColor("white")
        setCurrentLogo(DarkLogo);
    }

    useEffect(() => {
        window.addEventListener('scroll', ChangeColor);
    }
    )

    return (
        <>
        <div className="NavigationBar">
            <span><img className="NavLogo" src={CurrentLogo} alt="" /></span>
            <nav className="NavigationLink">
                <ul>
                    <li><NavLink className={TextColor} to="/">LOBBY</NavLink></li>
                    <li><NavLink className={TextColor} to="/library">LIBRARY</NavLink></li>
                    <li><NavLink className={TextColor} to="/about">ABOUT</NavLink></li>
                    <li><NavLink className={TextColor} to="/support">SUPPORT</NavLink></li>
                </ul>
            </nav>
        </div>
        </>
    );
}

export default NavigationBar;