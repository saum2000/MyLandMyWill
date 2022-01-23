import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
<<<<<<< HEAD
import { requestAccount, signer, _intializeContract } from "./template.js";


=======
// import {ethers} from 'ethers'
// import TokenArtifact from "./artifacts/contracts/LandRegistry.sol/LandRegistry.json"
// const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

// async function requestAccount() {
//   await window.ethereum.request({ method: 'eth_requestAccounts' });
// }

//  const provider = new ethers.providers.Web3Provider(window.ethereum);
//  const signer = provider.getSigner();
//  async function _intializeContract(init) {
//   // We first initialize ethers by creating a provider using window.ethereum
//   // When, we initialize the contract using that provider and the token's
//   // artifact. You can do this same thing with your contracts.
//   const contract = new ethers.Contract(
//     tokenAddress,
//     TokenArtifact.abi,
//     init
//   );

//   return contract
// }
// async function _getTokenData() {
//   const contract = await _intializeContract(signer)
//   const name = await contract.name();
//   const symbol = await contract.symbol();
//   const tokenData = {name, symbol}
//   setTokenData(tokenData);
// }
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
const Formappr = ({ handleClose }) => {
  const classes = useStyles();
  const [requestID, setrequestID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(requestID);
    handleClose();
  };
<<<<<<< HEAD

  async function ApproveRequest() {
    await requestAccount();
    const contract = await _intializeContract(signer);
    const request = await contract.approveRequest(requestID);
    await request.wait();
    console.log("Request Approved");
  }

=======
>>>>>>> 1d3b6e53ebfe4dbe98256e52631398e02cb23c68
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
<<<<<<< HEAD
        <Button type="submit" variant="contained" color="primary" onClick={ApproveRequest}>
=======
        <Button type="submit" variant="contained" color="primary">
>>>>>>> 1d3b6e53ebfe4dbe98256e52631398e02cb23c68
          Submit{" "}
        </Button>{" "}
      </div>{" "}
    </form>
  );
};

export default Formappr;
