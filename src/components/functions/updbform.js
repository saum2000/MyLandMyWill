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
const Formsel = ({ handleClose }) => {
  const classes = useStyles();
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [AdharNumber, setAdharNumber] = useState("");
  const [PanNumber, setPanNumber] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Name, Age, AdharNumber, PanNumber);
    handleClose();
  };

  async function UpdateBuyer() {
    await requestAccount();
    const contract = await _intializeContract(signer);
    const update = await contract.updateBuyer(
        Name,
        Age,
        AdharNumber,
        PanNumber
    );
    await update.wait();
    console.log("Buyer Updated");
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="filled"
        required
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <TextField
        label="Age"
        variant="filled"
        required
        value={Age}
        onChange={(e) => setAge(e.target.value)}
      />{" "}
      <TextField
        label="AdharNumber"
        variant="filled"
        type="AdharNumber"
        required
        value={AdharNumber}
        onChange={(e) => setAdharNumber(e.target.value)}
      />{" "}
      <TextField
        label="PanNumber"
        variant="filled"
        type="PanNumber"
        required
        value={PanNumber}
        onChange={(e) => setPanNumber(e.target.value)}
      />{" "}
      
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel{" "}
        </Button>{" "}
        <Button type="submit" variant="contained" color="primary" onClick={UpdateBuyer}>
          Submit{" "}
        </Button>{" "}
      </div>{" "}
    </form>
  );
};

export default Formsel;
