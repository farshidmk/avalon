import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Start from "./components/Start";
import ShowCharactersToPlayers from "./components/ShowCharactersToPlayers";
import Missions from "./components/Missions";
import "./App.css"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    overflow: "auto",
  },
}));

const App = () => {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const [players, setPlayers] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [playersWithRole, setPlayersWithRole] = useState([]);
  return (
    <div className={classes.root}>
      {step === 0 ? (
        <Start
          onStart={(players, characters) => {
            setPlayers(players);
            setCharacters(characters);
            setStep(1);
          }}
        />
      ) : step === 1 ? (
        <ShowCharactersToPlayers
          players={players}
          characters={characters}
          onGameStart={() => setStep(2)}
          onPlayersGetRole={(pr) => setPlayersWithRole(pr)}
        />
      ) : step === 2 ? (
        <Missions playersWithRole={playersWithRole} 
        onNewGame={()=>{
          setStep(0);
          setPlayers([]);
          setCharacters([]);
          setPlayersWithRole([]);
        }}
        onRestartWithSamePlayers={()=> {
          setStep(1);
          setPlayersWithRole([]);
        }}/>
      ) : null}
    </div>
  );
};

export default App;
