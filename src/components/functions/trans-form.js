import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
<<<<<<< HEAD
import { requestAccount, signer, _intializeContract } from "./template.js";
=======
>>>>>>> 1d3b6e53ebfe4dbe98256e52631398e02cb23c68

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
const Form1 = ({ handleClose }) => {
  const classes = useStyles();
  const [LandId, setLandId] = useState("");
  const [newOwner, setnewOwner] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(LandId,newOwner);
    handleClose();
  };
<<<<<<< HEAD

  async function OwnershipTransfer() {
    await requestAccount();
    const contract = await _intializeContract(signer);
    const transfer = await contract.ownershipTransfer(LandId, newOwner);
    await transfer.wait();
    console.log("Ownership Transfered");
  }

=======
>>>>>>> 1d3b6e53ebfe4dbe98256e52631398e02cb23c68
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="LandId"
        variant="filled"
        required
        value={LandId}
        onChange={(e) => setLandId(e.target.value)}
      />
      <TextField
        label="newOwner"
        variant="filled"
        required
        value={newOwner}
        onChange={(e) => setnewOwner(e.target.value)}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel{" "}
        </Button>{" "}
<<<<<<< HEAD
        <Button type="submit" variant="contained" color="primary" onClick={OwnershipTransfer}>
=======
        <Button type="submit" variant="contained" color="primary">
>>>>>>> 1d3b6e53ebfe4dbe98256e52631398e02cb23c68
          Submit{" "}
        </Button>{" "}
      </div>{" "}
    </form>
  );
};

export default Form1;
