import PropTypes from 'prop-types'
import "../styles/StartScreen.css"
import berserkLogo from "../assets/Berserk_anime_logo.png";

export default function StartScreen({
    props: {
        gameStarted,
        setGameStarted,
        setGameLevel,
        playClickSound
    } }) {

    const startGame = () => {
        setGameStarted(!gameStarted)
    }

    const handleGameLevel = (level) => {
        setGameLevel(level)
    }

    return (
        <div className="startScreen">
            <div className="logoContainer">
                <img className="logo" src={berserkLogo} alt="Berserk Logo" />
            </div>
            <div className="levelBtnsContainer">
                <button onClick={() => { startGame(); playClickSound(); handleGameLevel([5, 3]) }} className="levelBtn">Easy</button>
                <button onClick={() => { startGame(); playClickSound(); handleGameLevel([7, 4]) }} className="levelBtn">Medium</button>
                <button onClick={() => { startGame(); playClickSound(); handleGameLevel([10, 5]) }} className="levelBtn">Hard</button>
            </div>
        </div>
    )
}

StartScreen.propTypes = {
    props: PropTypes.object.isRequired
}