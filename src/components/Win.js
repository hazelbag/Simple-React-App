import React from "react";
// Import CardImg from reactstrap
import { CardImg } from "reactstrap";
// Import the cards to be displayed when the user navigates to the win page
import Card1 from "./Image/card1.jpg";
import Card2 from "./Image/card2.jpg";
import Card3 from "./Image/card3.jpg";

// Win component created and exported at the bottom of the page
class Win extends React.Component {
    // Card onClick functions below, when a specific card is clicked the function of the said card will run changing it to the new card thus revealing the new card
    cardFlip1() {
        const card1Img = require('./Image/club_king.jpg');
        document.getElementById("card1").src = card1Img;
    };

    cardFlip2() {
        const card2Img = require('./Image/spade_queen.png');
        document.getElementById("card2").src = card2Img;
    };

    cardFlip3() {
        const card3Img = require('./Image/diamond_king.jpg');
        document.getElementById("card3").src = card3Img;
    };

    // Function below lets the user know if he/she has either won or lost the game, a timeout has been set on the function to allow the card clicked to flip over first and in 250ms will then alert the user if he/she won or lost
    gameFunction() {

        setTimeout(function () {
            // Set the various options of either win or loose
            let winLoose = ["Winner Winner Chicken Dinner!!!", "Darnit You Loose", "Try Again!", "So Close!!!"];
            // Used math.floor and math.random to select from either of the winLoose lets above, but set it to use the length property as it gives a number.
            var result = winLoose[Math.floor(Math.random() * winLoose.length)];
            // To verify that the app works and the response is random each time
            // console.log(result);
            // EsLint used on below line, the user will receive an alert with the outcome and once the click OK, the page will relaod allowing the user to play again
            // eslint-disable-next-line no-unused-expressions
            alert(result) ? "" : window.location.reload(false);
        }, 250)
    };

    render() {
        return (
            <div className="win_div">
                <h1 className="pageTitles">Card Game</h1>
                <h3 className="chooseInfo">Choose a card to see if you win</h3>
                <br />
                {/* Display items created and display cards added, each has a className, id, source attribute, alt name and an onClick element with two fiunctions, the first is the game function and the second is the card flip function. */}
                <CardImg
                    className="cards"
                    id="card1"
                    src={Card1}
                    alt="Card Deck"
                    onClick={() => { this.gameFunction(); this.cardFlip1() }}
                />

                <CardImg
                    className="cards"
                    id="card2"
                    src={Card2}
                    alt="Card Deck"
                    onClick={() => { this.gameFunction(); this.cardFlip2() }}
                />

                <CardImg
                    className="cards"
                    id="card3"
                    src={Card3}
                    alt="Card Deck"
                    onClick={() => { this.gameFunction(); this.cardFlip3() }}
                />
            </div>
        );
    }
}

export default Win;
