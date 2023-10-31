import React, { useState, useEffect } from "react";
import Card from "./Card";
import '../styles/cardContainer.css';

const CardContainer = ({ updateCurrentCards, highScore, nextLevel, level }) => {


    const possibleCards = [
        { name: 'Guts', link: './assets' },
        { name: 'Casca', link: './assets/' },
        { name: 'Griffith', link: './assets/' },
        { name: 'Skull Knight', link: './assets/' },
        { name: 'Void', link: './assets/' },
        { name: 'Slan', link: './assets/' },
        { name: 'Conrad', link: './assets/' },
        { name: 'Count', link: './assets/' },
        { name: 'Zodd', link: './assets/' },
        { name: 'Femto', link: './assets/' },
        { name: 'Judea', link: './assets/' },
        { name: 'Beast', link: './assets/' },
        { name: 'Silat', link: './assets/' },
        { name: 'Gaiseric', link: './assets/' },
        { name: 'Pippin', link: './assets/' },
        { name: 'Puck', link: './assets/' },
        { name: 'Snake Apostle', link: './assets/' },
        { name: 'Wylad', link: './assets/' },
        { name: 'Farnese', link: './assets/' },
        { name: 'Isidoro', link: './assets/' },
        { name: 'Rickert', link: './assets/' },
        { name: 'Serpico', link: './assets/' },
        { name: 'Schreike', link: './assets/' },
        { name: 'Rodrick', link: './assets/' },
        { name: 'Guts Armor', link: './assets/' },
        { name: 'Casca Eclipse', link: './assets/' },
        { name: 'Griffith Eclipse', link: './assets/' }
    ]

    const [cards, setCards] = useState(possibleCards.slice(0, level));

    const randomCardOrder = () => {
        cards.sort(() => Math.random() > 0.5 ? -1 : 1);
    }

    const gameOver = () => {

        if (level === possibleCards.length) {
            document.querySelector('#gameOver h1').innerText = "Well done struggler!";
            document.querySelector('#gameOver button').classList.add("d-none");
        } else {
            document.querySelector('#gameOver h1').innerText = "You win";
        }

        document.querySelector('#gameOver').classList.add("d-grid");
    }

    const newGame = () => {
        nextLevel();
        setCards(possibleCards.slice(0, level + 1))
    }

    useEffect(() => {
        if (highScore === cards.length) {

            gameOver();
        }
    }, [highScore])

    useEffect(() => {
        randomCardOrder();
    })


    return (
        <div>
            <div className="card-container">
                {cards.map((x, ind) => {
                    return <div key={ind}>
                        <Card
                            cardText={x.name}
                            cardImg={x.link}
                            updateCurrentCards={updateCurrentCards}
                        />
                    </div>
                })}
            </div>

            <div className="modal" id="gameOver">
                <div className="modal-body">
                    <h1>You win!</h1>
                    <p>Level remaining: {possibleCards.length - level}</p>
                    <button type="button" onClick={newGame}>Next Level</button>
                </div>
            </div>
        </div>

    )
}

export default CardContainer;