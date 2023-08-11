import {NavLink} from 'react-router-dom'
import './NavigationBar.scss'

const NavigationBar = () => {
    return (
        <>
            <nav className="NavigationBar">
                <ul>
                    <li><NavLink to="/">Lobby</NavLink></li>
                    <li><NavLink to="/library">Library</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/support">Support</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default NavigationBar;