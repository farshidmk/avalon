import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import assassinIcon from "../assets/assassin.png";
import loyalServantIcon from "../assets/loyalServant.png";
import merlinIcon from "../assets/merlin.png";
import morganaIcon from "../assets/morgana.png";
import percivalIcon from "../assets/percival.png";
import devilIcon from "../assets/devil.png";

const useStyles = makeStyles((theme) => ({
  startSection: {
    border: "solid black 2px",
    borderRadius: "5px",
    boxShadow: "0px 0px 20px black",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  },
  playersNo: {
    minWidth: "200px",
  },
  playersName: {
    margin: "10px 0px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  textField: {
    minWidth: "185px",
    margin: "5px",
  },
  charactersSection: {
    margin: "10px",
    border: "2px solid #a2a2a2",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  badCharacter: {
    minWidth: "100px",
    margin: "5px",
    backgroundColor: "#aa303099",
    border: "1px solid red",
    color: "black",
    textAlign: "center",
    boxShadow: "0px 0px 10px red",
    borderRadius: "10px",
  },
  goodCharacter: {
    minWidth: "100px",
    margin: "5px",
    backgroundColor: "#2020aaaa",
    border: "1px solid blue",
    color: "white",
    textAlign: "center",
    boxShadow: "0px 0px 10px #0000ff",
    borderRadius: "10px",
  },
}));

const ROYAL_SERVANT = { name: "loyal servant", isBad: false };
const CHARACTERS = [
  ROYAL_SERVANT,
  { name: "Merlin", isBad: false },
  { name: "Percival", isBad: false },
  { name: "Morgana", isBad: true },
  { name: "Assassin", isBad: true },
  ROYAL_SERVANT,
  { name: "Mordred", isBad: true },
  ROYAL_SERVANT,
  ROYAL_SERVANT,
  { name: "Oberon", isBad: true },
];

const Start = (props) => {
  const classes = useStyles();
  const [numberOfPlayers, setNumberOfPlayers] = useState(5);
  const [playersName, setPlayersName] = useState([]);

  function handlePlayersNameChange(name, index) {
    let newArr = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      if (i === index) {
        newArr[i] = name;
      } else {
        newArr[i] = playersName[i];
      }
    }
    setPlayersName(newArr);
  }

  useEffect(() => {
    let newArr = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      newArr[i] = `player ${i + 1}`;
    }
    setPlayersName(newArr);
  }, [numberOfPlayers]);

  return (
    <div className={classes.startSection}>
      <Typography variant="h3" align="center" className="start-title">
        Avalon
      </Typography>
      <FormControl className={classes.playersNo}>
        <InputLabel id="player-number">Player Number</InputLabel>
        <Select
          labelId="player-number"
          id="player-number-select"
          value={numberOfPlayers}
          onChange={(e) => setNumberOfPlayers(e.target.value)}
        >
          {[5, 6, 7, 8, 9, 10].map((number) => {
            return (
              <MenuItem key={number} value={number}>
                {number}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {playersName.length > 0 ? (
        <div className={classes.playersName}>
          {[...Array(numberOfPlayers).keys()].map((playerNumber, index) => {
            return (
              <TextField
                className={classes.textField}
                key={playerNumber}
                id={`player${playerNumber + 1}-name`}
                label={`player ${playerNumber + 1}`}
                variant="outlined"
                value={playersName[index]}
                onChange={(e) => {
                  handlePlayersNameChange(e.target.value, index);
                }}
              />
            );
          })}
        </div>
      ) : null}
      <div className={classes.charactersSection}>
        <ShowCharacters numberOfPlayers={numberOfPlayers} />
      </div>
      <Button
        className="buttons"
        onClick={() =>
          props.onStart(playersName, CHARACTERS.slice(0, numberOfPlayers))
        }
        variant="contained"
        color="primary"
      >
        Start
      </Button>
    </div>
  );
};

export default Start;

const ShowCharacters = ({ numberOfPlayers }) => {
  return (
    <>
      {CHARACTERS.slice(0, numberOfPlayers).map((ch, index) => (
        <Character key={index} name={ch.name} isBad={ch.isBad} />
      ))}
    </>
  );
};
const Character = ({ name, isBad }) => {
  const classes = useStyles();
  let srcImg;
  switch (name) {
    case "Merlin":
      srcImg = merlinIcon;
      break;
    case "Percival":
      srcImg = percivalIcon;
      break;
    case "Morgana":
      srcImg = morganaIcon;
      break;
    case "Assassin":
      srcImg = assassinIcon;
      break;
    case "loyal servant":
      srcImg = loyalServantIcon;
      break;
    default:
      srcImg = devilIcon;
      break;
  }

  return (
    <div
      className={clsx(
        {
          [classes.badCharacter]: isBad,
          [classes.goodCharacter]: !isBad,
        },
        "card-character-in-start"
      )}
    >
      <h5>{name}</h5>
      <img className="character-in-start" alt={`${name}-icon`} src={srcImg} />
    </div>
  );
};
