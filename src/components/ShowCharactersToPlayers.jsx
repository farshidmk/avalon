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
    border: "3px solid #aa3030",
    color: "white",
    textAlign: "center",
    background:
      "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(0,0,0,1) 87%)",
  },
  goodCharacter: {
    minWidth: "100px",
    margin: "5px",
    backgroundColor: "#2020aaaa",
    border: "3px solid white",
    color: "black",
    textAlign: "center",
    background:
      "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,32,247,1) 87%)",
  },
  playerCardRoot: {
    width: "500px",
    marginTop: "10px",
    display: "flex",
    padding: "5px",
    flexDirection: "column",
    alignItems: "center",
    border: "3px solid black",
    borderRadius: "15px 15px 15px 15px",
    backgroundColor: "#5b5b5b",
  },
  characterSection: {
    minWidth: "300px",
    minHeight: "150px",
    padding: "10px",
    borderRadius: "5px 5px 5px 5px",
  },
}));

const ShowCharactersToPlayers = (props) => {
  const [playersRole, setPlayersRole] = useState([]);
  const [playerIndex, setPlayerIndex] = useState(0);

  useEffect(() => {
    let characters = [...props.characters];
    let players = [...props.players];
    let temp = [];
    let evilsTeam = [];
    let merlinsFace = [];
    for (let i = 0; i < props.characters.length; i++) {
      let randomCharacter =
        characters[Math.floor(Math.random() * characters.length)];
      temp[i] = { name: players[i], role: randomCharacter };
      let index = characters.indexOf(randomCharacter);
      if (index > -1) {
        characters.splice(index, 1);
      }
    }
    temp.forEach((player) => {
      if (player.role.isBad) {
        evilsTeam.push(player.name);
      }
      if (player.role.name === "Merlin" || player.role.name === "Morgana") {
        merlinsFace.push(player.name);
      }
    });
    temp.forEach((player) => {
      if (player.role.isBad || player.role.name === "Merlin") {
        player.knowingPlayers = evilsTeam;
      }
      if (player.role.name === "Percival") {
        player.merlinsFace = merlinsFace;
      }
    });
    setPlayersRole(temp);
  }, [props.characters, props.players]);
  useEffect(() => {
    return () => props.onPlayersGetRole(playersRole);
  });

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
  return (
    <div className={classes.playerCardRoot}>
      <h3>{props.player.name}</h3>
      <p>
        double click on button to {showRole ? " hide " : " show "} your
        character
      </p>
      <Button
        variant="contained"
        color="primary"
        onDoubleClick={() => setShowRole((i) => !i)}
      >
        {showRole ? " hide " : " show "}
      </Button>
      <Collapse in={showRole}>
        <div
          className={clsx(classes.characterSection, {
            [classes.badCharacter]: props.player.role.isBad,
            [classes.goodCharacter]: !props.player.role.isBad,
          })}
        >
          <h3>{props.player.role.name}</h3>
          {props.player.role.isBad ? (
            <>
              <p>هم تیمی های شما :</p>
              {props.player.knowingPlayers.map((player, index) => (
                <h5 key={index} style={{ color: "black" }}>
                  {player}
                </h5>
              ))}
            </>
          ) : props.player.role.name === "Percival" ? (
            <>
              <p>
                یکی از دو بازیکنان زیر مرلین است و دیگری خود را در نقش مرلین جا
                زده است
              </p>
              {props.player.merlinsFace.map((merlin, index) => (
                <h5 key={`merlin-face-${index}`}>{merlin}</h5>
              ))}
            </>
          ) : props.player.role.name === "Merlin" ? (
            <>
              <p>
                شما تیم شیطان را میشناسید ولی آنها نباید متوجه نقش شما در بازی
                شوند
              </p>
              {props.player.knowingPlayers.map((player, index) => (
                <h5 key={index} style={{ color: "white" }}>
                  {player}
                </h5>
              ))}
            </>
          ) : (
            <p>
              شما از یاران وفادار پادشاهی هستید و در ماموریت ها حتما باید موفقیت
              را انتخاب کنید
            </p>
          )}
        </div>
      </Collapse>
      <Button
        onClick={() => {
          props.nextPlayer();
        }}
        style={{ margin: "5px", marginTop: "15px" }}
        fullWidth
        variant="contained"
        disabled={showRole}
      >
        Next player
      </Button>
    </div>
  );
};
