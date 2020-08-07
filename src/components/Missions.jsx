import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  missionsRoot: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  boardRoot: {
    width: "85%",
    height: "90%",
    backgroundColor: "#grey",
    border: "2px solid black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  round: {
    borderRadius: "50%",
    border: "2px solid red",
    margin: "5px",
    height: "10vh",
    width: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  missionFailed: {
    backgroundColor: "red",
  },
  missionSuccess: {
    backgroundColor: "blue",
  },
  currentMission: {
    cursor: "pointer",
    animationName: "$blinker",
    animationDuration: "2s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  modalRoot: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid red",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "500px",
    minWidth: "300px",
    margin: "auto",
  },
  playersName: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonsSection: {
    display: "flex",
    margin: "5px 2px",
    justifyContent: "space-evenly",
  },
  "@keyframes blinker": {
    from: { backgroundColor: "red" },
    to: { backgroundColor: "blue" },
  },
}));

const Missions = (props) => {
  const classes = useStyles();
  const { playersWithRole } = props;
  const PLAYERS_NO = playersWithRole.length;
  const PLAYERS_ORDER_IN_MISSION = [
    [2, 3, 2, 3, 3],
    [2, 3, 4, 3, 4],
    [2, 3, 5, 4, 4],
    [3, 4, 4, 5, 5],
    [3, 4, 4, 5, 5],
    [3, 4, 4, 5, 5],
  ];
  const [openChoosePlayers, setOpenChoosePlayers] = useState(false);
  const [missions, setMissions] = useState(() => {
    let tempRoadMap = PLAYERS_ORDER_IN_MISSION[PLAYERS_NO - 5];
    let tempMission = [];
    tempRoadMap.forEach((trm) => {
      tempMission.push({ players: trm, status: "not-completed" });
    });
    return tempMission;
  });
  const [currentMission, setCurrentMission] = useState(0);
  const [playersNoInMission, setPlayersNoInMission] = useState(
    missions[currentMission]
  );
  const [playersInMission, setPlayersInMission] = useState([]);
  const [votingFailedCounter, setVotingFailedCounter] = useState(0);
  const [showMission, setShowMission] = useState(false);
  const [winner, setWinner] = useState("");

  function missionCompleted(result) {
    let temp = missions;
    if (!result) {
      temp[currentMission] = {
        players: temp[currentMission].players,
        status: "success",
      };
    } else {
      temp[currentMission] = {
        players: temp[currentMission].players,
        status: "failed",
      };
    }
    setPlayersNoInMission(missions[currentMission + 1]);
    setCurrentMission((i) => i + 1);
    setMissions(temp);
    setShowMission(false);
    setPlayersInMission([]);
    if (currentMission >= 2) {
      let counter = 0;
      missions.forEach((mission) => {
        if (mission.status === "failed") {
          counter = counter + 1;
        }
      });
      if (counter >= 3) {
        setWinner("bad");
      } else if (currentMission - (counter + 1) >= 3) {
        setWinner("good");
      }
    }
  }
  if (winner) {
    return (
      <div>
        <h1>Winner is {winner} guys</h1>
      </div>
    );
  }
  if (showMission) {
    return (
      <PlayerInMission
        playersInMission={playersInMission}
        onMissionCompleted={(result) => missionCompleted(result)}
      />
    );
  }
  return (
    <div className={classes.missionsRoot}>
      <h3>ignored times: {votingFailedCounter}</h3>
      <p>if 5 times ignore the kings, mission will be failed!</p>
      <div className={classes.boardRoot}>
        {missions &&
          missions.length > 0 &&
          missions.map((mission, index) => {
            return (
              <div
                key={`mission-${index}`}
                className={clsx(classes.round, {
                  [classes.missionFailed]: mission.status === "failed",
                  [classes.missionSuccess]: mission.status === "success",
                  [classes.currentMission]: index === currentMission,
                })}
                onClick={() => {
                  if (index === currentMission) {
                    setOpenChoosePlayers(true);
                  }
                }}
              >
                {mission.players}
              </div>
            );
          })}
        <ChoosePlayers
          open={openChoosePlayers}
          handleClose={() => setOpenChoosePlayers(false)}
          playersNoInMission={playersNoInMission.players}
          playersWithRole={playersWithRole}
          playersInMission={playersInMission}
          setPlayersInMission={(p) => setPlayersInMission(p)}
          onVotingResult={(isApproved) => {
            if (isApproved) {
              setVotingFailedCounter(0);
              setShowMission(true);
            } else if (votingFailedCounter < 5) {
              setVotingFailedCounter((i) => i + 1);
              setShowMission(false);
            } else {
              setVotingFailedCounter(0);
              missionCompleted(false);
              setShowMission(false);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Missions;

const ChoosePlayers = (props) => {
  const classes = useStyles();
  const [choosePlayersReminder, setChoosePlayersReminder] = useState(
    props.playersNoInMission
  );
  const [showVotingResult, setShowVotingResult] = useState(false);

  return (
    <Modal
      className={classes.modal}
      open={props.open}
      disableBackdropClick
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className={classes.modalRoot}>
        {choosePlayersReminder > 0 ? (
          <h5>{`Choose ${choosePlayersReminder} Players`}</h5>
        ) : (
          <h5>click start to vote</h5>
        )}

        <FormGroup className={classes.playersName}>
          {props.playersWithRole.map((player, index) => {
            return (
              <FormControlLabel
                key={`form-control-${index}`}
                control={
                  <Checkbox
                    checked={props.playersInMission.includes(player)}
                    onChange={() => {
                      if (props.playersInMission.includes(player)) {
                        props.setPlayersInMission((pim) =>
                          pim.filter((p) => p !== player)
                        );
                        setChoosePlayersReminder((i) => i + 1);
                      } else if (choosePlayersReminder > 0) {
                        props.setPlayersInMission((players) => [
                          ...players,
                          player,
                        ]);
                        setChoosePlayersReminder((i) => i - 1);
                      }
                    }}
                    name={player.name}
                  />
                }
                label={player.name}
              />
            );
          })}
        </FormGroup>
        <div className={classes.buttonsSection}>
          <Button
            variant="contained"
            color="primary"
            disabled={choosePlayersReminder > 0 || showVotingResult}
            onClick={() => setShowVotingResult(true)}
          >
            start
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={showVotingResult}
            onClick={props.handleClose}
          >
            exit
          </Button>
        </div>
        <Collapse in={showVotingResult}>
          <div className={classes.buttonsSection}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                props.handleClose();
                props.onVotingResult(true);
                setShowVotingResult(false);
              }}
            >
              Approve
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                props.handleClose();
                props.onVotingResult(false);
                props.setPlayersInMission([]);
                setShowVotingResult(false);
                setChoosePlayersReminder(props.playersNoInMission);
              }}
            >
              Deny
            </Button>
          </div>
        </Collapse>
      </div>
    </Modal>
  );
};

const PlayerInMission = ({ playersInMission, onMissionCompleted }) => {
  const classes = useStyles();
  const [missionFailed, setMissionFailed] = useState(false);
  const [indexCounter, setIndexCounter] = useState(0);

  function handleClickVote(vote) {
    setIndexCounter((i) => i + 1);
    if (vote === "failed") {
      setMissionFailed(true);
    }
    if (indexCounter >= playersInMission.length - 1) {
      onMissionCompleted(missionFailed);
    }
  }

  return (
    <div>
      {
        <div>
          <h2>{playersInMission[indexCounter].name}</h2>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleClickVote("success")}
          >
            Success
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleClickVote("failed")}
          >
            fail
          </Button>
        </div>
      }
    </div>
  );
};
