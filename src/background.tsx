import './home/Home.css'

function Background() {
    return (
            <div id="background"> 
                <WantedPoster></WantedPoster>
            </div>
    )
}

function WantedPoster() {
    return <img id="WantedPoster" src="/img/WantedPoster.png" />
}

export {
    Background,
}