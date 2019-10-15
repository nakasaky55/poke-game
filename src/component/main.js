import React, { useState } from "react";
import "../App.css";
import ChoiceCard from "./choiceCard";
import Navbar from "./navbar";
import Footer from "./footer";
import ButtonSection from "./buttonSection";
// import { start } from "repl";

const elementals = {
  fire: {
    name: "Fire",
    source: "./img/fire.svg"
  },
  water: {
    name: "Water",
    source: "./img/drop.svg"
  },
  grass: {
    name: "Grass",
    source: "./img/leaf.svg"
  }
};

const default_comp = {
  name: "default image",
  source: "./img/mystic.svg"
};

const default_player = {
  name: "default image",
  source: "./img/instinct.svg"
};

const defaul_text = "Press start to ";

//Main event
function Main(props) {
  console.log(props.playName)
  //control game
  const [Start, setState] = useState(true);

  //control game result
  const [result, setGameResult] = useState(null);

  //control current computer choice
  const [computerChoice, setCompChoice] = useState(default_comp);

  //control current Player choice
  const [pChoice, setPlayerChoice] = useState(default_player);

  //control winner and loser,jk
  const [winner, setWinner] = useState({});

  //save game history
  const [history, setHistory] = useState([]);

  //Press start to start the game
  const startGame = () => {
    setState(!Start);
    console.log(Start);
  };

  //trigger when player choose a card
  const onPlayerChoose = playerChoice => {
    let tempResult = getRoundOutcome(playerChoice);
    setPlayerChoice(elementals[playerChoice.toLowerCase()]);
  };

  //get random elemnt
  const getRandomChoice = () => {
    var keys = Object.keys(elementals);
    let randomChoice = elementals[keys[(keys.length * Math.random()) << 0]];
    setCompChoice(randomChoice);
    return randomChoice;
  };

  //IT'S TIME TO DU...DU...DUELLLLLLLLLLLL
  const getRoundOutcome = userChoice => {
    const computerChoice = getRandomChoice().name;
    let result;

    //compare comp vs player's choice
    if (userChoice === "Fire") {
      result = computerChoice === "Grass" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "Water") {
      result = computerChoice === "Fire" ? "Victory!" : "Defeat!";
    }
    if (userChoice === "Grass") {
      result = computerChoice === "Water" ? "Victory!" : "Defeat!";
    }

    if (userChoice === computerChoice) result = null;
    // console.log(userChoice + " _ " + computerChoice + " _ " + result);

    //return an object which records match's history
    let obj = new Object();
    obj.status = result;
    obj.playerChoice = userChoice;
    obj.compStatus = computerChoice;

    //get result of game
    setGameResult(result);

    let winnerObj = new Object();

    //Card title, winner or lose*
    result === "Victory!"
      ? (winnerObj.playerTitle = "Winner")
      : (winnerObj.playerTitle = "Lose*");
    result === "Defeat!"
      ? (winnerObj.compTitle = "Winner")
      : (winnerObj.compTitle = "Lose*");
    if (result === "Tie game!") {
      winnerObj.playerTitle = "TIE";
      winnerObj.compTitle = "TIE";
    }
    setWinner(winnerObj);

    //save history
    setHistory([...history, obj]);
  };

  return (
    <div className="container-fluid App">
      <Navbar onSignOut={props.onChangeLogin} playerName={props.playName}/>
      <div className="container">
        <div id="logo-img">
          <img width="38px" height="38px" src="./img/insignia.svg"></img>
          <h1>Pokemon war</h1>
        </div>
        <div className="row startbutton">
          <button onClick={() => startGame()}>Start</button>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="row">
              <ChoiceCard
                title="5 Elite"
                type={
                  result && (result === "Defeat!" ? "win-card" : "lose-card")
                }
                element={computerChoice.source}
                playTitle={winner.compTitle}
              />
              <ChoiceCard
                title="Player"
                type={
                  result && (result === "Victory!" ? "win-card" : "lose-card")
                }
                element={pChoice.source}
                playTitle={winner.playerTitle}
              />
            </div>
            <h1>{result || "Tie game"}</h1>
            <ButtonSection
              checkStart={Start}
              onPlayerChoose={onPlayerChoose}
              ele={elementals}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 history-board">
            <div>
              <img id="history-logo" src="img/logo.svg" />
            </div>
            <ul>
              {history.map(match => {
                if (match.status === null) {
                  return <li>{"Tie Game"}</li>;
                } else if (match.status !== "") {
                  return <li>{match.status}</li>;
                }
              })}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
