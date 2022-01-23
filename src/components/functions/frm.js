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
const Frm = ({ handleClose }) => {
  const classes = useStyles();
  const [Pincode, setPincode] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [LandPrice, setLandPrice] = useState("");
  const [PiD, setPiD] = useState("");
  const [surveyNo, setsurveyNo] = useState("");
  const [ipfsHash, setipfsHash] = useState("");
  const [doc, setdoc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Pincode, City, State, LandPrice, PiD, surveyNo, ipfsHash, doc);
    handleClose();
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Pincode"
        variant="filled"
        type="Pincode"
        required
        value={Pincode}
        onChange={(e) => setPincode(e.target.value)}
      />{" "}
      <TextField
        label="City"
        variant="filled"
        type="City"
        required
        value={City}
        onChange={(e) => setCity(e.target.value)}
      />{" "}
      <TextField
        label="State"
        variant="filled"
        type="State"
        required
        value={State}
        onChange={(e) => setState(e.target.value)}
      />{" "}
      <TextField
        label="LandPrice"
        variant="filled"
        required
        value={LandPrice}
        onChange={(e) => setLandPrice(e.target.value)}
      />{" "}
      <TextField
        label="PiD"
        variant="filled"
        type="PiD"
        required
        value={PiD}
        onChange={(e) => setPiD(e.target.value)}
      />{" "}
      <TextField
        label="surveyNo"
        variant="filled"
        type="surveyNo"
        required
        value={surveyNo}
        onChange={(e) => setsurveyNo(e.target.value)}
      />{" "}
      <TextField
        label="ipfsHash"
        variant="filled"
        type="ipfsHash"
        required
        value={ipfsHash}
        onChange={(e) => setipfsHash(e.target.value)}
      />{" "}
      <TextField
        label="doc"
        variant="filled"
        type="doc"
        required
        value={doc}
        onChange={(e) => setdoc(e.target.value)}
      />{" "}
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

export default Frm;
