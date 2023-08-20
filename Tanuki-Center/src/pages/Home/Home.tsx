//Components
import Logo from "../../components/Logo/Logo";

//Styles
import './Home.scss'

const Home = () => {
    const [BrightLogo, DarkLogo] = Logo();
    return (
        <>
            <div className="Home">
                <span><img className="LobbyLogo" src={BrightLogo} alt="" /></span>
            </div>
        </>
    )
}

export default Home;