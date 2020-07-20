import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Start from "./components/Start";
import ShowCharactersToPlayers from "./components/ShowCharactersToPlayers";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const [players, setPlayers] = useState([]);
  const [characters, setCharacters] = useState([]);

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
        />
      ) : null}
    </div>
  );
};

export default App;
