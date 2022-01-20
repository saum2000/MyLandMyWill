import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
const Formland = ({ handleClose }) => {
  const classes = useStyles();
  const [sellerID, setsellerID] = useState("");
  const [landID, setlandID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sellerID, landID);
    handleClose();
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="sellerID"
        variant="filled"
        //type="sellerID"
        required
        value={sellerID}
        onChange={(e) => setsellerID(e.target.value)}
      />{" "}
      <TextField
        label="landID"
        variant="filled"
        required
        value={landID}
        onChange={(e) => setlandID(e.target.value)}
      />
      
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel{" "}
        </Button>{" "}
        <Button type="submit" variant="contained" color="primary">
          Submit{" "}
        </Button>{" "}
      </div>{" "}
    </form>
  );
};

export default Formland;
