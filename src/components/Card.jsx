import React from "react";
import '../styles/card.css'
const Card = ({ cardText, cardImg, updateCurrentCards }) => {



    const checkCard = () => {
        updateCurrentCards(cardText);
    }

    return (
        <div onClick={checkCard} className="card">

            <img src={cardImg} />
            {cardText}
            <br></br>
        </div>
    )
}

export default Card;