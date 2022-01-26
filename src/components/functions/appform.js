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
const Formappr = ({ handleClose }) => {
  const classes = useStyles();
  const [requestID, setrequestID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(requestID);
    handleClose();
  };

  async function ApproveRequest() {
    await requestAccount();
    const contract = await _intializeContract(signer);
    const request = await contract.approveRequest(requestID);
    await request.wait();
    console.log("Request Approved");
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="requestID"
        variant="filled"
        required
        value={requestID}
        onChange={(e) => setrequestID(e.target.value)}
      />{" "}
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel{" "}
        </Button>{" "}
        <Button type="submit" variant="contained" color="primary" onClick={ApproveRequest}>
          Submit{" "}
        </Button>{" "}
      </div>{" "}
    </form>
  );
};

export default Formappr;
