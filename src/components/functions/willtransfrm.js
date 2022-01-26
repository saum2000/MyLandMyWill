import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { requestAccount, signer, _intializeContract } from "./template.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Willtrnsform = ({ handleClose }) => {
  const classes = useStyles();
  const [LandID, setLandID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(LandID);
    handleClose();
  };
  async function TransferWill() {
    await requestAccount();
    const contract = await _intializeContract(signer);
    const willtr = await contract.transferWillProperty(LandID);
    await willtr.wait();
    console.log("Will Transfered");
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="LandID"
        variant="filled"
        required
        value={LandID}
        onChange={(e) => setLandID(e.target.value)}
      />{" "}
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel{" "}
        </Button>{" "}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={TransferWill}
        >
          Submit{" "}
        </Button>{" "}
      </div>{" "}
    </form>
  );
};
export default Willtrnsform;
