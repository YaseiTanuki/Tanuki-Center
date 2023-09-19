import { useContext } from "react";
import BackgroundContext from "../../hooks/contexts/BackgroundContext";
import './About.scss'

const About = () => {
    const {BackgroundColor} = useContext(BackgroundContext);

    var ColorClass: string = "StaticWhite";
    if(BackgroundColor)
        ColorClass = "StaticWhite";
    else
        ColorClass = "StaticBlack"

    return (
        <>
        <div className={"About" + " " + ColorClass}>
            <p>This is About</p>
        </div>
        </>
    )
}

export default About;