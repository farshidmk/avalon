import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Start from "./components/Start";

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

  return (
    <div className={classes.root}>
      {step === 0 ? <Start onStart={() => setStep(1)} /> : null}
    </div>
  );
};

export default App;
