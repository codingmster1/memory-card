import PropTypes from 'prop-types'
import "../styles/Header.css"
import berserkLogo from "../assets/Berserk_anime_logo.png";

export default function Header({
    props: {
        score,
        bestScore,
        playClickSound,
        reset
    } }) {

    return (
        <div className="header">
            <div className="headerLogoContainer">
                <img onClick={() => { reset(); playClickSound() }} className="logo" src={berserkLogo} alt="Berserk Logo" />
            </div>
            <div className="scoreContainer">
                <p className="score">Score: {score}</p>
                <p className="bestScore">Best score: {bestScore}</p>
            </div>
        </div>
    )
}

Header.propTypes = {
    props: PropTypes.object.isRequired
}