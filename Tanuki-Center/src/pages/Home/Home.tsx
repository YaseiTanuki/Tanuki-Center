//Package
import { useEffect, useState, useContext } from "react";

//Components
import Logo from "../../components/Logo/Logo";

//Styles
import './Home.scss'

const Home = () => { 
    const [BrightLogo, DarkLogo] = Logo();
    const [CurrentLogo, setCurrentLogo] = useState(BrightLogo);

    const ChangeColor = () => {
        if(window.scrollY > 720) {
            setCurrentLogo(DarkLogo);
    }
    }

    useEffect(() => {
        window.addEventListener('scroll', ChangeColor);
    }
    )

    return (
        <div className="Home">
            <span><img className="LobbyLogo" src={CurrentLogo} alt="" /></span>
        </div>
    )
}

export default Home;