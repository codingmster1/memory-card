import React from "react";
import '../Styles/navbar.css';
import Socials from "./Socials";

const NavBar = ({ score, highScore }) => {

    const modalToggle = () => {
        let modal = document.querySelector('.modal');
        modal.classList.toggle("d-grid");
    }

    return (
        <div>
            <div className="nav">
                <div className="logo" onClick={modalToggle}></div>
                <div className="tab tab-info" onClick={modalToggle}>
                    <span className="tab-text">Info</span>
                    <span className="tab-bar"></span>
                </div>
                <div className="tab">
                    <span className="tab-text">Score</span>
                    <span className="tab-bar">
                        <span className="tab-bar-text">{score}</span>
                    </span>
                </div>
                <div className="tab">
                    <span className="tab-text">High Score</span>
                    <span className="tab-bar">
                        <span className="tab-bar-text">{highScore}</span>
                    </span>
                </div>

                <Socials />
            </div>
            <div className="modal" onClick={modalToggle}>
                <div className="modal-body">
                    <h2>Rules</h2>
                    <hr />
                    <p>Select each individual card, in a row, without selecting the same card twice.</p>
                </div>
            </div>
        </div>

    )
}

export default NavBar