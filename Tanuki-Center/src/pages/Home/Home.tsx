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
            // setbackgroundColor("BrightBackground")
            // return setCurrentLogo(BrightLogo);
            return;
        }
        setBackgroundColor(false)
        setCurrentLogo(DarkLogo);
    }

    useEffect(() => {
        window.addEventListener('scroll', ChangeColor);
    }
    )

    return (
        <>
            <div className={'Home' + ' ' + (BackgroundColor ? 'BrightBackground' : 'DarkBackground')}>
                <span><img className="LobbyLogo" src={CurrentLogo} alt="" /></span>
            </div>
        </>
    )
}

export default Home;