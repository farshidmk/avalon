import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  badCharacter: {
    minWidth: "100px",
    margin: "5px",
    backgroundColor: "#aa303099",
    border: "1px solid red",
    color: "black",
    textAlign: "center",
  },
  goodCharacter: {
    minWidth: "100px",
    margin: "5px",
    backgroundColor: "#2020aaaa",
    border: "1px solid blue",
    color: "white",
    textAlign: "center",
  },
}));

const ShowCharactersToPlayers = (props) => {
  const [playersRole, setPlayersRole] = useState([]);
  const [playerIndex, setPlayerIndex] = useState(0);

  useEffect(() => {
    let characters = [...props.characters];
    let players = [...props.players];
    let temp = [];
    for (let i = 0; i < props.characters.length; i++) {
      let randomCharacter =
        characters[Math.floor(Math.random() * characters.length)];
      temp[i] = { name: players[i], role: randomCharacter };
      let index = characters.indexOf(randomCharacter);
      if (index > -1) {
        characters.splice(index, 1);
      }
    }
    setPlayersRole(temp);
  }, [props.characters, props.players]);

  return (
    <div>
      {playersRole.length ? (
        <CardToShowPlayers
          player={playersRole[playerIndex]}
          nextPlayer={() => {
            if (playerIndex >= playersRole.length - 1) {
              props.onGameStart();
            } else {
              setPlayerIndex((i) => i + 1);
            }
          }}
        />
      ) : (
        <h1>Avalon</h1>
      )}
    </div>
  );
};

export default ShowCharactersToPlayers;

const CardToShowPlayers = (props) => {
  const classes = useStyles();
  const [showRole, setShowRole] = useState(false);

  console.log("props: ", props);
  return (
    <div>
      <h3>{props.player.name}</h3>
      <Button onDoubleClick={() => setShowRole((i) => !i)}>show</Button>
      <Collapse in={showRole}>
        <div
          className={clsx({
            [classes.badCharacter]: props.player.isBad,
            [classes.goodCharacter]: props.player.isBad,
          })}
        >
          {props.player.role.name}
        </div>
      </Collapse>
      <Button
        onClick={() => {
          setShowRole(false);
          props.nextPlayer();
        }}
      >
        Next player
      </Button>
    </div>
  );
};
