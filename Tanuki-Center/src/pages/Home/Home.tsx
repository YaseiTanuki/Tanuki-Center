//Styles
import './Home.scss'
import WantedPoster from '../../assets/img/WantedPoster.png'

const Home = () => { 

    return (
        <section className="Home">
            <div className="Top">
                <img className="WantedPoster" src={WantedPoster} alt="A poster that has a Tanuki in it" />
            </div>
        </section>
    )
}

export default Home;