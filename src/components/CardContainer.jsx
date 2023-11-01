import React, { useState, useEffect } from "react";
import Card from "./Card";
import '../styles/cardContainer.css';

const CardContainer = ({ updateCurrentCards, highScore, nextLevel, level }) => {


    const possibleCards = [
        { name: 'Guts', link: './assets/guts-GA.webp' },
        { name: 'Casca', link: './assets/casca-GA.png' },
        { name: 'Griffith', link: './assets/Griffith_Card_GA.webp' },
        { name: 'Skull Knight', link: './assets/skull-knight.jpg' },
        { name: 'Void', link: './assets/void.webp' },
        { name: 'Slan', link: './assets/slan.png' },
        { name: 'Conrad', link: 'assets/Conrad_Manga.webp' },
        { name: 'Count', link: './assets/count.webp' },
        { name: 'Zodd', link: './assets/zodd-card.jpg' },
        { name: 'Femto', link: './assets/femto.jpg' },
        { name: 'Judea', link: './assets/judea1.webp' },
        { name: 'Beast', link: './assets/beast.webp' },
        { name: 'Silat', link: './assets/silat.webp' },
        { name: 'Gaiseric', link: './assets/king-gaiseric.jpg' },
        { name: 'Pippin', link: './assets/Pippin-Manga.webp' },
        { name: 'Puck', link: './assets/puck.png' },
        { name: 'Snake Apostle', link: './assets/snake-apostle.jpg' },
        { name: 'Wylad', link: './assets/Wylad.webp' },
        { name: 'Farnese', link: 'assets/Farnese_Manga.webp' },
        { name: 'Isidoro', link: './assets/Isidro.webp' },
        { name: 'Rickert', link: './assets/Rickert-Manga.webp' },
        { name: 'Serpico', link: './assets/Serpico_wind.webp' },
        { name: 'Schreike', link: './assets/schreike.png' },
        { name: 'Rodrick', link: './assets/rodrick.jpg' },
        { name: 'Guts Armor', link: './assets/berserk-guts-armor.png' },
        { name: 'Casca Eclipse', link: './assets/casca-BS.png' },
        { name: 'Griffith Eclipse', link: './assets/Griffith.png' },
        { name: 'Zodd Flying', link: './assets/zodd-fly.png' }
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