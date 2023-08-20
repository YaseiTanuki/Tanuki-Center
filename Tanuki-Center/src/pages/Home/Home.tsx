//Components
import { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";

//Styles
import './Home.scss'

const Home = () => { 
    const [BrightLogo, DarkLogo] = Logo();
    const [CurrentLogo, setCurrentLogo] = useState(BrightLogo);
    const [BackgroundColor, setbackgroundColor] = useState("BrightBackground")


    const ChangeColor = () => {
        if(window.scrollY < 720){
            setbackgroundColor("BrightBackground")
            return setCurrentLogo(BrightLogo);
        }
        setbackgroundColor("DarkBackground")
        setCurrentLogo(DarkLogo);
    }

    useEffect(() => {
        window.addEventListener('scroll', ChangeColor);
    }
    )

    return (
        <>
            <div className={'Home' + ' ' + BackgroundColor}>
                <span><img className="LobbyLogo" src={CurrentLogo} alt="" /></span>
            </div>
        </>
    )
}

export default Home;