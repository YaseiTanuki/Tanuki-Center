//Package
import { useEffect, useState, useContext } from "react";

//Components
import Logo from "../../components/Logo/Logo";

//hooks
import BackgroundContext from "../../hooks/contexts/BackgroundContext";

//Styles
import './Home.scss'

const Home = () => { 
    const [BrightLogo, DarkLogo] = Logo();
    const [CurrentLogo, setCurrentLogo] = useState(BrightLogo);
    const {BackgroundColor, setBackgroundColor} = useContext(BackgroundContext);


    const ChangeColor = () => {
        if(window.scrollY < 720){
            return;
        }
        setBackgroundColor('DarkBackground')
        setCurrentLogo(DarkLogo);
    }

    useEffect(() => {
        window.addEventListener('scroll', ChangeColor);
    }
    )

    return (
        <div className="Home">
            <div className={BackgroundColor}>
                <span><img className="LobbyLogo" src={CurrentLogo} alt="" /></span>
            </div>
        </div>
    )
}

export default Home;