/*BEGIN IMPORT*/
//Package
import {NavLink} from 'react-router-dom'

//Components
import Logo from "../Logo/Logo";

//Styles
import './NavigationBar.scss'

/*END IMPORT*/
const NavigationBar = () => {
    const [BrightLogo, DarkLogo] = Logo();

    return (
        <>
        <div className="NavigationBar">
            <span><img className="NavLogo" src={BrightLogo} alt="" /></span>
            <nav className="NavigationLink">
                <ul>
                    <li><NavLink to="/">LOBBY</NavLink></li>
                    <li><NavLink to="/library">LIBRARY</NavLink></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
                    <li><NavLink to="/support">SUPPORT</NavLink></li>
                </ul>
            </nav>
        </div>
        </>
    );
}

export default NavigationBar;