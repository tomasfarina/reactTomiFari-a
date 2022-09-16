import "./hero.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Hero () {
    return(
        <div className="row">
            <div className="col-2">
                <h1>Delicious Japanese<br/>meals and snacks</h1>
                <p>Find the best drinks, meals,<br/> snacks and more at JapanFoods!</p>
                <a href="" className="btn">Explore now! &#8594;</a>
            </div>
            <div className="col-2">
            <img src="../assets/hero-drawings.png" alt="hero image"/>
            </div>
        </div>
    )
}

export default Hero