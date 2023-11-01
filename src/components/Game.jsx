import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import NavBar from "./NavBar";

import '../Styles/game.css';
import '../Styles/media-queries.css';

const Game = () => {

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [currentCards, setCurrentCards] = useState([]);
    const [level, setLevel] = useState(5);

    const updateCurrentCards = (card) => {
        if (currentCards.indexOf(card) === -1) {
            setCurrentCards([...currentCards, card])
        } else {
            setCurrentCards([]);
            setScore(0);
        }
    }

    const nextLevel = () => {
        setLevel(level + 1);
    }

    useEffect(() => {
        document.querySelector('#gameOver').classList.remove("d-grid");
        setScore(0);
        setCurrentCards([]);
    }, [level])

    useEffect(() => {
        //reset
        if (currentCards.length === 0) {
            setScore(0);
        }
        //update score
        else {
            setScore(score + 1);
        }

    }, [currentCards])

    // on score change check high score
    useEffect(() => {
        if (score >= highScore) {
            setHighScore(score);
        }
    }, [score])

    return (
        <div className="gameboard">
            <NavBar score={score} highScore={highScore} />

            <CardContainer
                updateCurrentCards={updateCurrentCards}
                highScore={highScore}
                nextLevel={nextLevel}
                level={level}
            />
        </div>
    )
}

export default Game;