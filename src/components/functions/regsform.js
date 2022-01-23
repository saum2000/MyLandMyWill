import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
<<<<<<< HEAD
import { requestAccount, signer, _intializeContract } from "./template.js";
=======
import { ethers } from "ethers";
import TokenArtifact from "C:/Users/swaru/OneDrive/Desktop/btech-proj/src/artifacts/contracts/LandRegistry.sol/LandRegistry.json";
// const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const tokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
async function requestAccount() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
}

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
async function _intializeContract(init) {
  // We first initialize ethers by creating a provider using window.ethereum
  // When, we initialize the contract using that provider and the token's
  // artifact. You can do this same thing with your contracts.
  const contract = new ethers.Contract(tokenAddress, TokenArtifact.abi, init);

  return contract;
}
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
const Formss = ({ handleClose }) => {
  const classes = useStyles();
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [AdharNumber, setAdharNumber] = useState("");
  const [PanNumber, setPanNumber] = useState("");
  const [City, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Name, Age, AdharNumber, PanNumber, City);
    handleClose();
  };
  async function _RegisterSeller() {
    await requestAccount();
    const contract = await _intializeContract(signer);
    const seller = await contract.registerSeller(
      Name,
      Age,
      AdharNumber,
      PanNumber,
      City
    );
    await seller.wait();
<<<<<<< HEAD
    const reg = await contract.RegisteredSellerMapping("0x70997970C51812dc3A010C7d01b50e0d17dc79C8");
    console.log("Seller Registered");
    console.log(reg);
=======
    console.log("Seller Registered");
>>>>>>> 1d3b6e53ebfe4dbe98256e52631398e02cb23c68
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
      <TextField
        label="City"
        variant="filled"
        type="City"
        required
        value={City}
        onChange={(e) => setCity(e.target.value)}
      />{" "}
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel{" "}
        </Button>{" "}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={_RegisterSeller}
        >
          Submit{" "}
        </Button>{" "}
      </div>{" "}
    </form>
  );
};

export default Formss;
