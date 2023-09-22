import { useContext } from "react";
import BackgroundContext from "../../hooks/contexts/BackgroundContext";
import './About.scss'
import '../Home/Home.scss'

const About = () => {
    const {BackgroundColor} = useContext(BackgroundContext);

    return (
        <>
        <div className={"About" + " " + (BackgroundColor ? 'BrightBackground' : 'DarkBackground')}>
            <p>This is About</p>
        </div>
        </>
    )
}

export default About;